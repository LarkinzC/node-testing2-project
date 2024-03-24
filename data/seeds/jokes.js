exports.seed = function(knex) {
    return knex('jokes').truncate()
        .then(function () {
            return knex('jokes').insert([
                {joke: 'What did the horse say after it tripped?', punchline: 'Help! I’ve fallen and I can’t giddyup!'},
                {joke: 'Why can’t you hear a pterodactyl going to the bathroom?', punchline: 'Because the “P” is silent.'},
                {joke: 'What do you call a well-balanced horse?', punchline: 'Stable.'},
                {joke: 'What do you call an angry carrot?', punchline: 'A steamed veggie.'},
                {joke: 'Where do polar bears keep their money?', punchline: 'In a snowbank.'}
            ])
        })
}