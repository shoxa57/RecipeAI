/**
 * AI RECIPE ASSISTANT LOGIC
 */
const recipeInput = document.getElementById('recipe-upload-input');
const recipeImg = document.getElementById('recipe-preview');
const recipePlaceholder = document.getElementById('recipe-placeholder');
const recipeOutput = document.getElementById('recipe-output');
const recipeResultBox = document.getElementById('recipe-result-box');

if (recipeInput) {
    recipeInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            // Визуальное обновление интерфейса
            recipeImg.src = event.target.result;
            recipeImg.style.display = 'block';
            recipePlaceholder.style.display = 'none';
            recipeResultBox.style.display = 'block';
            recipeOutput.innerHTML = '<span class="pulse" style="color: var(--primary-color);">Chef AI is analyzing your ingredients...</span>';
            
            // Отправка на анализ
            const base64Image = event.target.result.split(',')[1];
            processRecipeAI(base64Image);
        };
        reader.readAsDataURL(file);
    });
}

async function processRecipeAI(base64Image) {
    try {
        const response = await fetch(GROQ_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${GROQ_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.2-11b-vision-preview",
                messages: [
                    {
                        role: "user",
                        content: [
                            {
                                type: "text",
                                text: "Identify the ingredients in this image and write a creative, step-by-step recipe. Include Title, Prep Time, and Instructions. Answer in English only."
                            },
                            {
                                type: "image_url",
                                image_url: { url: `data:image/jpeg;base64,${base64Image}` }
                            }
                        ]
                    }
                ],
                temperature: 0.2
            })
        });

        const data = await response.json();

        if (data.error) {
            recipeOutput.innerHTML = `<span style="color: #ff4d4d;">Error: ${data.error.message}</span>`;
        } else {
            // Используем библиотеку marked для красивого отображения Markdown
            const markdownText = data.choices[0].message.content;
            recipeOutput.innerHTML = marked.parse(markdownText);
        }

    } catch (error) {
        console.error("Recipe AI Error:", error);
        recipeOutput.innerHTML = '<span style="color: #ff4d4d;">Connection failed. Check your API key or network.</span>';
    }
}
