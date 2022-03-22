// Get all cards elements as an array
const cards = gsap.utils.toArray('.card');

// Loop through all cards
cards.forEach((card, index) => {

    // For each card get specific elements
    const type = card.children[1];
    const bottom = card.children[2];
    const img = card.lastElementChild;

    // For each card create a timeline to animate elemnts
    // Add a delay depending on index to create a stagger effect
    var tl = gsap.timeline().delay(index * .4)
    tl.from(card, { autoAlpha: 0, yPercent: 50 })
        .from(img, { autoAlpha: 0 })
        .from(type, { autoAlpha: 0, yPercent: -100 })
        .from(bottom, { autoAlpha: 0, yPercent: 30 }, "<");

});