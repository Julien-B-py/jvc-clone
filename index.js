const cards = gsap.utils.toArray('.card');

cards.forEach((card, index) => {

    const img = card.lastElementChild

    var tl = gsap.timeline().delay(index * .4)
    tl.from(card, { autoAlpha: 0, yPercent: 50 })
        .from(img, { autoAlpha: 0 })


})