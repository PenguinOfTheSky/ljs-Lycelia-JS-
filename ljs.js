
{ //start D
  window.D = window.document
  D.find = D.querySelector
  D.findAll = D.querySelectorAll
  D.escapeHTML = function(str) {
    return str.replace(/[&<"']/g, function(m) {
      switch (m) {
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '"':
          return '&quot;';
        default:
          return '&#039;';
      }
    });
  }
  D.make = function(type, obj) {
   return Object.assign(document.createElement(type), obj || {})
  }
  /*D.fetchJson = function() {
    console.log('this function coming soon.')
  }*/
  D.help = function(topic) {
    let topics = {
      commandList: `find, findAll, make`,
      find: `same as .querySelector`,
      findAll: `same as .querySelectorAll`,
      make: `input: (type, opts); creates and returns a dom element.`

    }
    if (topic) {
      if (topics[topic]) console.log(topics[topic])
      else console.log(`help article not found.`)
    } else {
      let topicsList = '\n*  ' + Object.keys(topics).join('\n*  ')
      console.log(`type D.help("topic") for help on topic. List of topics: ${topicsList}`)
    }
  }
}

{ //start ljs
  window.ljs = {
    help: function(topic) {
      //call help('topic') or just help() to see topics available.
      let topics = {
        'D': `Shorthand for document. type D.help() for more info.`,
        'Array': `Array.help() for more info.`,
        'math': `Renders math formulas to human-readable. Type math.help() for more info. (note lower-case m)`
      }
      if (topics[topic]) console.log(topics[topic])
      else (console.log(Object.keys(topics)))
    }
  }
}
window.math = {}
math.render = function(str) {

}
math.fraction = function(a, b) {
  return `<math><mfrac><mn>${a}</mn><mi>${b}</mi> </mfrac></math>`
}
math.power = function(base, exponent) {
  return `<math>
     <msup>
        <mi>${base}</mi>
        <mn>${exponent}</mn>
     </msup>
  </math> `
}
math.help = function(topic) {
  let topics = {
    render: `renders human-readable math formulas.`,
    renderFraction: `renders a simple fraction`
  }
  if (topic) {
    if (topics[topic]) console.log(topics[topic])
    else console.log(`help article not found.`)
  } else {
    let topicsList = '\n*  ' + Object.keys(topics).join('\n*  ')
    console.log(`type math.help("topic") for help on topic. List of topics: ${topicsList} \n math is a library to render math formulas.`)
  }
}
{//start Array
  Array.help = function(topic) {
    //call help('topic') or just help() to see topics available.
    let topics = {
      'shuffle': `shuffles array in place, returns nothing.`
    }
    if (topics[topic]) console.log(topics[topic])
    else (console.log(Object.keys(topics)))
  }
  Array.shuffle = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
