const b = document.getElementById("box");

window.addEventListener("keydown", (e) => {
  b.innerHTML = `
    <table style="border:1px solid black">
      <tr>
        <th>KEY</th>
        <th>KEYCODE</th>
        <th>CODE</th>
      </tr>
      <tr>
        <td>${e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  `;
});
