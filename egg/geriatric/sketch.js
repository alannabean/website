//made using tracery by kate compton & tracery tutorials + p5js tracery template by allison parrish 


let genButton;

function setup() { 
  noCanvas();
  createP("Congratulations on your geriatric pregnancy!");
  genButton = createButton("Thanks.");
  genButton.size(200,40);
  genButton.mousePressed(generate);
  genButton.style('border', '2px solid #000');
  genButton.style('font-family', 'Courier New');
  genButton.id('genButton');
  
} 

function draw() { 
  genButton.position(windowWidth/2-100, windowHeight/1.4);

}

//function mousePressed(){
  //generate();
//}

//function keyPressed(){
  //if (key === SHIFT){
  //generate();
  //}
//}

function generate() {
  // removes existing outputs from the page (if any)
  for (let elem of selectAll("p")) {
    elem.remove();
  }
  
    let grammar = tracery.createGrammar(grammarSource);
    grammar.addModifiers(tracery.baseEngModifiers);
    let output = grammar.flatten("#origin#");
    createP(output);
  
}

// write your grammar below, or cut-and-paste from another tool (as the value for variable "grammarSource")
let grammarSource = {
  
	"adjectives": [
      "bariatric",
      "melodramatic",
      "aquatic",
      "democratic",
      "bureaucratic",
      "systematic",
      "hydroponic",
      "pragmatic",
      "aristocratic",
      "dogmatic",
      "idiomatic",
      "semantic",
      "acerbic",
      "acrobatic",
      "acrostic",
      "lycanthropic",
      "philanthrophic",
      "ionic",
      "iconic",
      "hypnotic",
      "onomatopoetic",
      "anthropomorphic",
      "autodidactic",
      "pedantic",
      "Midatlantic",
      "soporific",
      "catalytic",
      "choreographic",
      "cosmetic",
      "prosaic",
      "monotheistic",
      "electromagnetic",
      "emphatic",
      "ergonomic",
      "euphemistic",
      "forensic",
      "gastronomic",
      "geodisic",
      "germaphobic",
      "hermetic",
      "hieroglyphic",
      "holographic",
      "hydraulic",
      "iambic",
      "journalistic",
      "kleptocratic",
      "logarithmic",
      "linguistic",
      "Paleozoic",
      "nomadic",
      "harmonic",
      "nontoxic",
      "oscilloscopic",
      "parabolic",
      "philosophic",
      "solipsistic",
      "photographic",
      "tectonic",
      "Platonic",
      "pseudoscientific",
      "pyrotechnic",
      "sporadic",
      "stochastic",
      "polysyllabic",
      "telescopic",
      "holistic",
      "virtuosic",
      "vitriolic"

      
  
],
	
	"origin": ["Congratulations on your #adjectives# pregnancy!"]
};