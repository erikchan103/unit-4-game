$( "#obiwan" ).click(function() {
    alert( "Handler for .click() called." );
  });

$("#yourcharacter").click(function(){
  alert("test")
});


  var currenthp= 100;
  var currentattack=1;
  var counter=0

  var enemyhp=100;
  var enemyattack=100;

  var obiwan={
    hp: 120,
    attack:15,
    counterattack:25,
    mainc:false,
    defender: false,
  }

  var luke={
    hp: 100,
    attack:18,
    counterattack:30,
    mainc:false,
    defender: false,
  }

  var darthsidious={
    hp:150,
    attack:12,
    counterattack:40,
    mainc:false,
    defender: false,
  }

  var darthmaul={
    hp:180,
    attack:20,
    counterattack:55,
    mainc:false,
    defender: false,
  }

  // on click on image to append one div into yourcharcter
  // rest goes to enemies
  // if images don't clear in selection, maybe text content
  
  // match vars with object associated i.e hp and attack 
  // do i need boolean for choose character and enemy?
  // attack button triggers battle
  // once current hp <0, reveal restart button
  // if enemy hp <0, see if you can enable/disable button after/before hp<0

  // if you beat enemy, counter goes up ++
  // if counter===3, you win and restart is available

