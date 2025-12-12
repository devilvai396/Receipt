
export function mountReceipt(root, env) {
  const ITEMS = [
    "Mental energy", "Idle scrolling", "Unexpected joy", "Waiting",
    "Overthinking", "Background anxiety", "Small win", "Distraction tax",
    "Focus minutes", "Random thoughts", "Social energy", "Patience",
    "Decision fatigue", "Curiosity", "Mood swings", "Time leakage",
    "Hope", "Regret", "Effort", "Attention drift"
  ];

  function rand(n){ return Math.floor(Math.random()*n); }

  function buildReceipt() {
    const count = 6 + rand(5);
    let total = 0;
    const lines = [];
    for(let i=0;i<count;i++){
      const price = rand(9)+1;
      total += price;
      lines.push({ name: ITEMS[rand(ITEMS.length)], price });
    }
    return { lines, total };
  }

  const data = buildReceipt();
  root.innerHTML = `
    <div class="receipt">
      <h1>RECEIPT</h1>
      <div class="sub">${env.isMini ? "Mini App" : "Web"} · Today</div>
      <div class="lines">
        ${data.lines.map(l=>`
          <div class="line">
            <span>${l.name}</span>
            <span>${l.price}</span>
          </div>
        `).join("")}
      </div>
      <div class="total">
        <span>TOTAL</span>
        <span>${data.total}</span>
      </div>
      <div class="foot">Thank you for living.</div>
    </div>
  `;
}
