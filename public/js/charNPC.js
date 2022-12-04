//Create object for storing NPC data
addEventListener('DOMContentLoaded', button);

function button(){
let submit= document.querySelector('button');
submit.addEventListener("click", getInfo);
}

class Character{
constructor(name, Class, level, dmname, race, alignment, experince, proficiency,stats, modArray, perception, 
inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows){
this.name=name; this.Class=Class; this.level=level; this.dmname=dmname; 
this.race=race; this.alignment=alignment; this.experience=experince;
this.proficiency=proficiency;
if(this.level>=1 && this.level<5){
this.proficiency=2;
}else if (this.level>=5 && this.level<9){
this.proficiency=3;     
}else if (this.level>=9 && this.level<13){
this.proficiency=4;
}else if(this.level>=13 && this.level<17){
this.proficiency=5;    
}else if(this.level>=17){
this.proficiency=6;    
}
this.stats=stats; this.modArray=modArray;
this.perception=perception; this.inspiration=inspiration; this.aC=aC; 
this.hp=hp;
this.movSpeed=movSpeed;
this.initiative=initiative;
this.profLang=profLang;
this.saveThrows=saveThrows;
this.spellCastingClass=spellCastingClass;
}
}

class Npc extends Character{
constructor(name, Class, level, dmname, race, alignment, experince, proficiency, stats, modArray, perception, 
inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows){
super(name, Class, level, dmname, race, alignment, experince, proficiency, stats, modArray, perception, 
inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows); 
}
}

let npc={
Skills:[],
spellCastingAbility:1,
spellDC:1, 
spellAttackBonus:1, 
//spells:[lvl][spells], 
//money:[type][amt], 
//equiptment:[]
};

let character={ 
Skills:[],
spellCastingAbility:1,
spellDC:1, 
spellAttackBonus:1, 
//spells:[lvl][spells], 
//money:[type][amt], 
//equiptment:[]
};

function getInfo(){
    let a=document.getElementById("Name"); 
    let b=document.getElementById("characterClass");
    let c=document.getElementById("level");
    let d=document.getElementById("playerName");
    let e=document.getElementById("r");
    let f=document.getElementById("a");
    let g=document.getElementById("exp");
    let h=document.getElementById("ct");
    let str=document.getElementById("str");
    let dex=document.getElementById("dex");
    let con=document.getElementById("con");
     let int=document.getElementById("int");
     let wis=document.getElementById("wis");
     let cha=document.getElementById("cha");
     let ins=document.getElementById("ins");
    let arc=document.getElementById("armor");
    let speed=document.getElementById("speed");
    let hitPoints=document.getElementById("hp");
    let eq=document.getElementById("equiptment");
    let stS=document.getElementById("sst"); 
    let dS=document.getElementById("dst"); 
    let coS=document.getElementById("cost");
    let iS=document.getElementById("ist");
    let wS=document.getElementById("wst"); 
    let cS=document.getElementById("cst");
    const saveThrows=[];
    const profLang=[];
    saveThrows.push(stS.value, dS.value, coS.value, iS.value, wS.value, cS.value);
    profLang.push("Common");
    const aC=arc.value;
    const hp=hitPoints.value;
    const movSpeed=speed.value;
    const stats=[]; 
    stats.push(str.value, dex.value,con.value, int.value, wis.value, cha.value); 
    const mods=[]; 
    let num; 
    let calc;
    for (let i=0; i<stats.length; i++){
        num=stats[i];
        calc=(num-10)/2;
         mods.push(Math.round(calc));
    }
    const perception=10+mods[4];
    const name=a.value;
    const Class=b.value;
    const level=c.value;
    const playername=d.value;
    const race=e.value;
    const alignment=f.value;
    const experience=g.value;
    const inspiration=ins.value;
    let proficiency=0;
    let deathSavesSuccesses=0;
    let deathSavesFails=0;
    const initiative=mods[1];
    const spellCastingClass=b.value;
    if (h.value=="Character"){
    const char=new Character(name, Class, level, playername, race, alignment, experience, proficiency, stats, mods, perception, 
    inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows); 
    return char; 
    }else if (h.value=="NPC"){
    const npc=new Npc(name, Class, level, playername, race, alignment, experience, proficiency, stats, mods, perception, 
    inspiration, aC, hp, movSpeed, initiative, profLang, spellCastingClass, saveThrows); 
    return npc;    
    }
}