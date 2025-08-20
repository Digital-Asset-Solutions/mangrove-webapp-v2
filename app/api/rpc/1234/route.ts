const EDEN_RPC = "http://edennet-1-testnet.binary.builders:8545"

export async function POST(req: Request) {
  try {
    // Get the JSON body from the incoming request
    const body = await req.json()

    // Forward it to the Eden RPC
    const response = await fetch(EDEN_RPC, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
