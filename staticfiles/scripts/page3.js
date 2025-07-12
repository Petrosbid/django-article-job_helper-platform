const questions = [
  { text: "از کارهای دستی لذت می‌برم.", type: "R" },
  { text: "به آزمایش‌های علمی علاقه‌مندم.", type: "I" },
  { text: "از طراحی و نقاشی خوشم میاد.", type: "A" },
  { text: "دوست دارم به مردم کمک کنم.", type: "S" },
  { text: "دوست دارم رهبری گروهی را برعهده بگیرم.", type: "E" },
  { text: "از کارهای دفتری دقیق خوشم میاد.", type: "C" },
  { text: "به تعمیر وسایل علاقه‌مندم.", type: "R" },
  { text: "به ریاضی علاقه‌مندم.", type: "I" },
  { text: "موسیقی گوش دادن و نواختن رو دوست دارم.", type: "A" },
  { text: "از مراقبت از دیگران لذت می‌برم.", type: "S" },
  { text: "از فروش و بازاریابی خوشم میاد.", type: "E" },
  { text: "دوست دارم با کامپیوتر کار کنم.", type: "C" },
  { text: "کارهای فنی برام جذابه.", type: "R" },
  { text: "تحقیقات علمی رو دوست دارم.", type: "I" },
  { text: "از نوشتن داستان لذت می‌برم.", type: "A" },
  { text: "از داوطلب شدن در کمک‌های مردمی لذت می‌برم.", type: "S" },
  { text: "دوست دارم پروژه‌ها رو مدیریت کنم.", type: "E" },
  { text: "از ثبت اطلاعات دقیق لذت می‌برم.", type: "C" },
  { text: "به نجاری یا خیاطی علاقه دارم.", type: "R" },
  { text: "دوست دارم چیزهای جدید کشف کنم.", type: "I" }
];
const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

window.onload = () => {
  const container = document.getElementById("questions");

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${i + 1}. ${q.text}</p>
      <label><input type="radio" name="q${i}" value="1" required> بله</label>
      <label><input type="radio" name="q${i}" value="0"> خیر</label>
    `;
    container.appendChild(div);
  });

  document.getElementById("quiz-form").onsubmit = function (e) {
    e.preventDefault();

    // ریست امتیازها
    for (let key in scores) scores[key] = 0;

    const form = new FormData(e.target);
    form.forEach((val, key) => {
      const index = parseInt(key.replace("q", ""));
      if (val === "1") scores[questions[index].type]++;
    });

    const result = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const top3 = result.slice(0, 3).map(item => item[0]).join('');

    localStorage.setItem("result", top3);
    localStorage.setItem("scores", JSON.stringify(scores));
    window.location.href = "../myproject/page2_1.html";
  };
};