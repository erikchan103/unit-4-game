$("#obiwan").click(function () {
  if (obiwan.mainc === false && obiwan.chosen === false) {
    $("#obiwan").appendTo("#yourcharacter");
    currenthp = obiwan.hp;
    baseattack = obiwan.attack;
    currentattack = obiwan.attack;
    $("#health").html("HP: " + currenthp);
    $("#luke").appendTo("#enemies");
    $("#darthsidious").appendTo("#enemies");
    $("#darthmaul").appendTo("#enemies");
    obiwan.chosen = true;
    obiwan.mainc = true;
    luke.mainc = true;
    darthsidious.mainc = true;
    darthmaul.mainc = true;
  }
  if ((!obiwan.chosen) && (!enemyChosen)) {
    enemyChosen = true;
    obiwandefend = true;
    counter = obiwan.counterattack;
    enemyhp = obiwan.hp;
    $("#obiwan").appendTo("#Defender");
    $("#enemyHP").html("HP: " + enemyhp);
  }
});

$("#luke").click(function () {
  if (luke.mainc === false && luke.chosen === false) {
    $("#luke").appendTo("#yourcharacter");
    currenthp = luke.hp;
    baseattack = luke.attack;
    currentattack = luke.attack;
    $("#health").html("HP: " + currenthp);
    $("#obiwan").appendTo("#enemies");
    $("#darthsidious").appendTo("#enemies");
    $("#darthmaul").appendTo("#enemies");
    luke.chosen = true;
    obiwan.mainc = true;
    luke.mainc = true;
    darthsidious.mainc = true;
    darthmaul.mainc = true;
  }
  if ((!luke.chosen) && (!enemyChosen)) {
    enemyChosen = true;
    lukedefend = true;
    counter = luke.counterattack;
    enemyhp = luke.hp;
    $("#luke").appendTo("#Defender");
    $("#enemyHP").html("HP: " + enemyhp);
  }
});

$("#darthsidious").click(function () {
  if (darthsidious.mainc === false && darthsidious.chosen === false) {
    $("#darthsidious").appendTo("#yourcharacter");
    currenthp = darthsidious.hp;
    baseattack = darthsidious.attack;
    currentattack = darthsidious.attack;
    $("#health").html("HP: " + currenthp);
    $("#obiwan").appendTo("#enemies");
    $("#luke").appendTo("#enemies");
    $("#darthmaul").appendTo("#enemies");
    darthsidious.chosen = true;
    obiwan.mainc = true;
    luke.mainc = true;
    darthsidious.mainc = true;
    darthmaul.mainc = true;
  }
  if ((!darthsidious.chosen) && (!enemyChosen)) {
    enemyChosen = true;
    darthsidiousdefend = true;
    counter = darthsidious.counterattack;
    enemyhp = darthsidious.hp;
    $("#darthsidious").appendTo("#Defender");
    $("#enemyHP").html("HP: " + enemyhp);
  }
});

$("#darthmaul").click(function () {
  if (darthmaul.mainc === false && darthmaul.chosen === false) {
    $("#darthmaul").appendTo("#yourcharacter");
    currenthp = darthmaul.hp;
    baseattack = darthmaul.attack;
    currentattack = darthmaul.attack;
    $("#health").html("HP: " + currenthp);
    $("#obiwan").appendTo("#enemies");
    $("#luke").appendTo("#enemies");
    $("#darthsidious").appendTo("#enemies");
    darthmaul.chosen = true;
    obiwan.mainc = true;
    luke.mainc = true;
    darthsidious.mainc = true;
    darthmaul.mainc = true;
  }
  if ((!darthmaul.chosen) && (!enemyChosen)) {
    enemyChosen = true;
    darthmauldefend = true;
    counter = darthmaul.counterattack;
    enemyhp = darthmaul.hp;
    $("#darthmaul").appendTo("#Defender");
    $("#enemyHP").html("HP: " + enemyhp);
  }
});


$("#attack").click(function () {
  if ((enemyChosen) && (alive)) {
    currenthp = currenthp - counter;
    enemyhp -= currentattack;
    if (obiwan.chosen && lukedefend) {
      $("#fightlog").html("Obi-Wan attacked Luke for " + currentattack + " damage. Luke attacked back for " + counter + " damage.")
    }
    if (obiwan.chosen && darthsidiousdefend) {
      $("#fightlog").html("Obi-Wan attacked Darth Sidious for " + currentattack + " damage. Darth Sidious attacked back for " + counter + " damage.")
    }
    if (obiwan.chosen && darthmauldefend) {
      $("#fightlog").html("Obi-Wan attacked Darth Maul for " + currentattack + " damage. Darth Maul attacked back for " + counter + " damage.")
    }
    if (luke.chosen && obiwandefend) {
      $("#fightlog").html("Luke attacked Obi-wan for " + currentattack + " damage. Obi-Wan attacked back for " + counter + " damage.")
    }
    if (luke.chosen && darthsidiousdefend) {
      $("#fightlog").html("Luke attacked Darth Sidious for " + currentattack + " damage. Darth Sidious attacked back for " + counter + " damage.")
    }
    if (luke.chosen && darthmauldefend) {
      $("#fightlog").html("Luke attacked Darth Maul for " + currentattack + " damage. Darth Maul attacked back for " + counter + " damage.")
    }
    if (darthmaul.chosen && lukedefend) {
      $("#fightlog").html("Darth Maul attacked Luke for " + currentattack + " damage. Luke attacked back for " + counter + " damage.")
    }
    if (darthmaul.chosen && darthsidiousdefend) {
      $("#fightlog").html("Darth Maul attacked Darth Sidious for " + currentattack + " damage. Darth Sidious attacked back for " + counter + " damage.")
    }
    if (darthmaul.chosen && obiwandefend) {
      $("#fightlog").html("Darth Maul attacked Obi-Wan for " + currentattack + " damage. Obi-Wan attacked back for " + counter + " damage.")
    }
    if (darthsidious.chosen && lukedefend) {
      $("#fightlog").html("Darth Sidious attacked Luke for " + currentattack + " damage. Luke attacked back for " + counter + " damage.")
    }
    if (darthsidious.chosen && darthmauldefend) {
      $("#fightlog").html("Darth Sidious attacked Darth Maul for " + currentattack + " damage. Darth Maul attacked back for " + counter + " damage.")
    }
    if (darthsidious.chosen && obiwandefend) {
      $("#fightlog").html("Darth Sidious attacked Obi-Wan for " + currentattack + " damage. Obi-Wan attacked back for " + counter + " damage.")
    }
    currentattack += baseattack;
    $("#health").html("HP: " + currenthp);
    $("#enemyHP").html("HP: " + enemyhp);
  }
  if (currenthp < 1) {
    alive = false;
    $("#fightlog").html("You have been defeated. Do you want to try again?")
    $("#restart").css("display", "block");
  }
  if (enemyhp < 1 && (enemyChosen)) {
    $("#enemyHP").html("");
    kills++
    console.log(kills)
    enemyChosen = false;
    if (obiwandefend === true) {
      $('#obiwan').hide()
    }
    if (lukedefend === true) {
      $('#luke').hide()
    }
    if (darthsidiousdefend === true) {
      $('#darthsidious').hide()
    }
    if (darthmauldefend === true) {
      $('#darthmaul').hide()
    }
    obiwandefend = false;
    lukedefend = false;
    darthsidiousdefend = false;
    darthmauldefend = false;
    if (kills > 2) {
      $("#fightlog").html("You have defeated your enemies. You have achieved Victory!");
      $("#restart").css("display", "block");
    }
  }
});

$("#restart").click(function () {
  $("#obiwan").appendTo("#characters");
  $("#luke").appendTo("#characters");
  $("#darthsidious").appendTo("#characters");
  $("#darthmaul").appendTo("#characters");
  $("#health").html("");
  $("#enemyHP").html("");
  $("#restart").css("display", "none");
  enemyChosen = false;
  obiwan.chosen = false;
  luke.chosen = false;
  darthmaul.chosen = false;
  darthsidious.chosen = false;
  obiwan.mainc = false;
  luke.mainc = false;
  darthsidious.mainc = false;
  darthmaul.mainc = false;
  $('#darthmaul').show();
  $('#darthsidious').show();
  $('#luke').show();
  $('#obiwan').show();
  obiwandefend = false;
  lukedefend = false;
  darthsidiousdefend = false;
  darthmauldefend = false;
  alive = true;
  kills = 0;
  $("#fightlog").html("");
});

var currenthp = 100;
var baseattack = 0;
var currentattack = 1;
var counter = 0;
var kills = 0;
var enemyChosen = false;
var enemyhp = 100;
var enemyattack = 100;
var obiwandefend = false;
var lukedefend = false;
var darthsidiousdefend = false;
var darthmauldefend = false;
var alive = true;

var obiwan = {
  hp: 150,
  attack: 14,
  counterattack: 16,
  chosen: false,
  mainc: false,
  defender: false,
}

var luke = {
  hp: 140,
  attack: 18,
  counterattack: 15,
  chosen: false,
  mainc: false,
  defender: false,
}

var darthsidious = {
  hp: 110,
  attack: 18,
  counterattack: 50,
  chosen: false,
  mainc: false,
  defender: false,
}

var darthmaul = {
  hp: 170,
  attack: 13,
  counterattack: 14,
  chosen: false,
  mainc: false,
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

