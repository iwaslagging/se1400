// ========== PLAN MY NIGHT QUIZ ==========

const quizAnswers = {};

const recommendations = {
  // Results based on mood + budget combo (simplified logic)
  getResults(mood, budget, group, time) {
    const results = {
      chill: {
        free:     { title: "Chill Night In the Wild", sub: "Low-key, outdoors, and completely free.", cards: [
          { emoji: "🌅", title: "Sunset at the Overlook", desc: "Drive to the sunset viewpoint, watch the sky go orange. Bring snacks. Free and stunning." },
          { emoji: "🌳", title: "Pioneer Park Walk", desc: "Evening stroll through the park. Great for clearing your head and just talking." },
          { emoji: "☕", title: "Campus Corner Cafe", desc: "Get a coffee and sit. No agenda, no timeline. Just exist somewhere cozy." }
        ]},
        cheap:    { title: "Your Perfect Low-Key Night", sub: "Affordable, relaxed, and zero pressure.", cards: [
          { emoji: "☕", title: "Campus Corner Cafe", desc: "Good coffee, strong wifi, open late. The ideal spot when you want somewhere to land." },
          { emoji: "🧠", title: "Trivia Night", desc: "Wednesday trivia at a local bar — free entry, cheap drinks, surprisingly fun." },
          { emoji: "🌅", title: "Sunset Drive", desc: "Grab snacks, drive to the overlook point, and watch the sun go down. Under $5." }
        ]},
        moderate: { title: "Comfortable Night Out", sub: "Worth spending a little for a relaxed, quality evening.", cards: [
          { emoji: "🍜", title: "Midnight Ramen", desc: "Rich, warm bowls at a ramen spot open until 2am. The spicy miso is the move." },
          { emoji: "🦉", title: "The Night Owl Bar", desc: "Classic dive bar, great prices, good atmosphere. Order a drink and settle in." },
          { emoji: "🎬", title: "Campus Movie Night", desc: "Outdoor screening with a blanket and snacks. Casual, comfortable, no agenda." }
        ]},
        splurge:  { title: "Treat Yourself Night", sub: "Going all in on comfort and quality.", cards: [
          { emoji: "🍦", title: "Sweet Cravings Dessert Bar", desc: "Loaded milkshakes and elaborate desserts. Go big, regret nothing." },
          { emoji: "🎸", title: "Indie Night Live", desc: "Good live music, student discount at the door, real atmosphere." },
          { emoji: "🍜", title: "Ramen + Dessert Combo", desc: "Dinner at Midnight Ramen, finish with Sweet Cravings. Two-stop evening sorted." }
        ]},
      },
      social: {
        free:     { title: "Free Group Night", sub: "Big fun, zero budget.", cards: [
          { emoji: "🌮", title: "Food Truck Friday", desc: "Free entry, 15+ food trucks downtown. Walk around, eat everything, talk to everyone." },
          { emoji: "🧠", title: "Trivia Night", desc: "Pack your group into a trivia team and compete. Free entry at multiple venues." },
          { emoji: "🎤", title: "Open Mic Night", desc: "Campus arts center, Thursdays. Free audience entry. Genuinely entertaining chaos." }
        ]},
        cheap:    { title: "Social Night on a Budget", sub: "Group plans that won't wreck your wallet.", cards: [
          { emoji: "🎳", title: "Bowling Night", desc: "Strike Zone Bowling on a weeknight — as low as $2/game. Competitive and affordable." },
          { emoji: "🌮", title: "Food Truck Friday", desc: "The easiest group food plan. Free entry, variety for everyone, great vibe." },
          { emoji: "🧠", title: "Trivia Night", desc: "Six-person team, free entry, bar drinks optional. Wednesday nights downtown." }
        ]},
        moderate: { title: "Big Night Out", sub: "Energy up, spend a little, make memories.", cards: [
          { emoji: "🕹️", title: "Level Up Arcade", desc: "Full arcade open until 1am on weekends. Load a card, share it, argue over who's best at air hockey." },
          { emoji: "🎸", title: "Indie Night Live", desc: "Live bands Friday nights. $8 entry, student discount. Real crowd energy." },
          { emoji: "🎤", title: "Karaoke Night", desc: "Two local venues run karaoke Thursday and Saturday. Chaos in the best possible way." }
        ]},
        splurge:  { title: "Go All Out Night", sub: "The full group experience, no compromises.", cards: [
          { emoji: "🎤", title: "Private Karaoke Room", desc: "Reserve a private room at the karaoke bar in advance. Your own space, your playlist." },
          { emoji: "🎳", title: "Glow Bowling", desc: "Weekend glow bowling at Strike Zone — the upgraded version. Book a lane in advance." },
          { emoji: "🍦", title: "Dessert After Everything", desc: "End the night at Sweet Cravings. Loaded waffles and milkshakes to recap the whole evening." }
        ]},
      },
      adventurous: {
        free:     { title: "Adventurous & Free Night", sub: "Explore the city without spending a dime.", cards: [
          { emoji: "🥾", title: "Red Cliffs Hike", desc: "Hit a trail through the red rock landscape before sunset. Challenging, beautiful, free." },
          { emoji: "🌅", title: "Sunset Overlook Point", desc: "Drive to the best viewpoint in the area and watch the valley go golden. Worth it every time." },
          { emoji: "🌮", title: "Food Truck Friday", desc: "Free entry, 15+ trucks. Walk the whole thing before deciding what to eat." }
        ]},
        cheap:    { title: "Active Night Out", sub: "Low budget, high energy.", cards: [
          { emoji: "⛳", title: "Mini Golf at Fiesta Fun", desc: "18-hole mini golf with go-karts and arcade on site. Under $10, endlessly replayable." },
          { emoji: "🥾", title: "Sunset Hike", desc: "Pick a trail at Red Cliffs and hike out for the golden hour view. Bring water." },
          { emoji: "🌮", title: "Food Truck After", desc: "Post-hike food truck run. You earned the loaded fries." }
        ]},
        moderate: { title: "Adventure Night", sub: "Push the plan, make the story.", cards: [
          { emoji: "⛳", title: "Mini Golf + Arcade", desc: "Fiesta Fun's full experience — mini golf, go-karts, laser tag, and arcade. Make a tournament." },
          { emoji: "🎸", title: "Live Music", desc: "Indie Night Live on Fridays brings real energy. $8 door, student discount." },
          { emoji: "🍔", title: "Burger After", desc: "Post-event smash burger at Campus Burger Shack. Double smash, you deserve it." }
        ]},
        splurge:  { title: "Epic Night", sub: "Go big, no regrets.", cards: [
          { emoji: "🎤", title: "Private Karaoke + Go-Karts", desc: "Start with go-karts at Fiesta Fun, then book a private karaoke room. Two-act evening." },
          { emoji: "🕹️", title: "Arcade Battle Night", desc: "Load up a card at Level Up Arcade and make it a proper competition. Open until 1am." },
          { emoji: "🍜", title: "Late-Night Ramen", desc: "Wind down at Midnight Ramen after everything. Warm, filling, and the perfect ending." }
        ]},
      },
      romantic: {
        free:     { title: "Romantic Night, Zero Budget", sub: "Free doesn't mean low effort. This is actually great.", cards: [
          { emoji: "🌅", title: "Sunset at the Overlook", desc: "Drive to the viewpoint around 7pm. Watch the valley go golden together. Genuinely beautiful and free." },
          { emoji: "🎬", title: "Campus Movie Night", desc: "Outdoor film screening with a blanket on the campus lawn. Low pressure, naturally romantic." },
          { emoji: "🌳", title: "Evening Park Walk", desc: "Pioneer Park at dusk. Walking side-by-side, talking, no agenda. Underrated date format." }
        ]},
        cheap:    { title: "Thoughtful Budget Date", sub: "Effort beats money every time.", cards: [
          { emoji: "🧺", title: "Picnic at Pioneer Park", desc: "Grab food from a grocery store, find a blanket, pick a good spot. Under $20 for both of you." },
          { emoji: "☕", title: "Coffee + Walk", desc: "Campus Corner Cafe, then a walk somewhere scenic. Easy, comfortable, great conversation." },
          { emoji: "🍦", title: "Dessert Date", desc: "Skip the full dinner, meet for something ridiculous at Sweet Cravings. Simpler and better." }
        ]},
        moderate: { title: "Nice Date Night", sub: "Putting real effort into a real evening.", cards: [
          { emoji: "⛳", title: "Mini Golf Date", desc: "Fiesta Fun mini golf — mildly competitive, naturally fun, great for first or third dates alike." },
          { emoji: "🎸", title: "Live Music Night", desc: "Indie Night Live is a shared experience that actually means something. $8 student entry." },
          { emoji: "🍜", title: "Ramen Dinner", desc: "Midnight Ramen for dinner — warm, casual, and genuinely good food at a fair price." }
        ]},
        splurge:  { title: "Special Night Out", sub: "When you want to actually impress someone.", cards: [
          { emoji: "🎸", title: "Concert + Nice Dinner", desc: "Indie Night Live for the show, then a sit-down dinner after. Real date energy." },
          { emoji: "🍦", title: "Dessert Bar Finale", desc: "End any date at Sweet Cravings. Elaborate milkshakes and a reason to stay a little longer." },
          { emoji: "🌅", title: "Golden Hour Drive", desc: "After dinner, drive to the sunset overlook. End the night somewhere memorable." }
        ]},
      }
    };

    const moodResults = results[mood] || results.chill;
    return moodResults[budget] || moodResults.cheap;
  }
};

function initQuiz() {
  const steps = document.querySelectorAll('.quiz-step');
  const result = document.getElementById('quizResult');
  if (!steps.length) return; // Not on homepage

  let currentStep = 1;

  // Option selection
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', function() {
      const stepEl = this.closest('.quiz-step');
      stepEl.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');

      const stepId = stepEl.id;
      const stepNum = stepId.replace('step', '');
      const nextBtn = document.getElementById('next' + stepNum);
      if (nextBtn) nextBtn.disabled = false;
    });
  });

  function goToStep(num) {
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    const target = document.getElementById('step' + num);
    if (target) {
      target.classList.add('active');
      currentStep = num;
      updateDots();
    }
  }

  function updateDots() {
    for (let i = 1; i <= 4; i++) {
      const dot = document.getElementById('dot' + i);
      if (dot) dot.classList.toggle('done', i <= currentStep);
    }
  }

  function getSelected(stepNum) {
    const step = document.getElementById('step' + stepNum);
    const sel = step && step.querySelector('.quiz-option.selected');
    return sel ? sel.dataset.value : null;
  }

  function showResult() {
    quizAnswers.mood = getSelected(1);
    quizAnswers.budget = getSelected(2);
    quizAnswers.group = getSelected(3);
    quizAnswers.time = getSelected(4);

    const res = recommendations.getResults(
      quizAnswers.mood, quizAnswers.budget, quizAnswers.group, quizAnswers.time
    );

    document.getElementById('resultTitle').textContent = res.title;
    document.getElementById('resultSubtitle').textContent = res.sub;

    const cardsEl = document.getElementById('resultCards');
    cardsEl.innerHTML = res.cards.map(c => `
      <div class="result-card">
        <div class="result-emoji">${c.emoji}</div>
        <h4>${c.title}</h4>
        <p>${c.desc}</p>
      </div>
    `).join('');

    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    result.classList.add('active');
    updateDots();
  }

  // Wire up next buttons
  const n1 = document.getElementById('next1');
  const n2 = document.getElementById('next2');
  const n3 = document.getElementById('next3');
  const n4 = document.getElementById('next4');
  const reset = document.getElementById('quizReset');

  if (n1) n1.addEventListener('click', () => goToStep(2));
  if (n2) n2.addEventListener('click', () => goToStep(3));
  if (n3) n3.addEventListener('click', () => goToStep(4));
  if (n4) n4.addEventListener('click', showResult);

  if (reset) {
    reset.addEventListener('click', () => {
      result.classList.remove('active');
      document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
      document.querySelectorAll('.quiz-btn').forEach(b => b.disabled = true);
      goToStep(1);
    });
  }

  updateDots();
}

// ========== CONTACT FORM ==========

function submitForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const category = document.getElementById('category');
  const suggestion = document.getElementById('suggestion');

  if (!name || !name.value.trim()) { alert('Please enter your name.'); return; }
  if (!email || !email.value.trim()) { alert('Please enter your email.'); return; }
  if (!suggestion || !suggestion.value.trim()) { alert('Please enter your suggestion.'); return; }

  // Hide form fields, show success
  const form = document.querySelector('.contact-form');
  if (form) {
    const inputs = form.querySelectorAll('.form-group, .form-submit');
    inputs.forEach(el => el.style.display = 'none');
    const success = document.getElementById('formSuccess');
    if (success) success.classList.add('active');
  }
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  initQuiz();
});
