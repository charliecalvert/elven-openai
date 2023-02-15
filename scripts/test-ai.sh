curl https://api.openai.com/v1/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer "${OPENAI_API_KEY} \
-d '{"model": "text-davinci-003", "prompt": "write a node js method that tests if a file exists", "temperature": 0, "max_tokens": 120}'