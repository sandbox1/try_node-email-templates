const Email = require('email-templates');

const email = new Email();

email.render('mars/html', {
    name: 'Nomnom',
    adjective: 'rusty'
})
.then( console.log)
.catch( console.error)

