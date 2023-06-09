/**
 * API REFERENCE:
 * https://platform.openai.com/docs/api-reference/chat
 */

export default defineEventHandler(async (event) => {
  try {
    console.log('process.env.OPENAI_API_KEY', process.env.OPENAI_API_KEY)
    const body = await readBody(event)
    const { age, day } = body

    // create the prompt
    let prompt = `Tạo 1 thực đơn cho bé ${age} tuổi vào ngày ${day} đầy đủ chất dinh dưỡng`

    // send to openai
    const result = (await $fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 1,
        max_tokens: 818,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 0,
        n: 1,
      }),
    })) as any

    // set the workout text (remove leading new lines)
    let workout = result?.choices?.[0]?.message?.content
    if (workout.substring(0, 2) === '\n\n') {
      workout = workout.substring(2)
    }

    // log some stuff
    console.log(`[Prompt] ${prompt}`)
    console.log(`[Tokens] ${result?.usage?.total_tokens} (prompt: ${result?.usage?.prompt_tokens}, completion: ${result?.usage?.completion_tokens})`)
    console.log(`[Workout] ${workout}`)

    // return to browser
    return workout
  } catch (e) {
    console.log(e)
  }

  // return an error
  return ''
})
