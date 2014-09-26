;(function($) {
	'use strict';


	//references
	var $generate_button = $('#generate-button');
	var $copy_button = $('#copy-button');
	var $confirm_copy = $('#confirm-copy');
	var $para_num = $('#para-num');
	var $text_area = $('#text-area');
	var $error_message = $('#error-message');
	var $featured_quote = $('#tina-caption');
	var $radio_section = $('.radio');
	var $checkbox_section = $('.checkboxes');

	$(window).load(function() {
		 featured_quote();
	});

	$generate_button.on('click', function(e){
		e.preventDefault();

		var length = $para_num.val();
		var para_length = $radio_section.find('input[name=para-length]:checked').val();
		var extras = $checkbox_section.find('input[name=hi-boys]:checked').val();

		if ($('#extra-sass').is(':checked')){
			para_length = 15;
		}
		if (isNaN(length) || length === ""){
			$para_num.addClass('error');
			$error_message.fadeIn('fast');
		}else {
			$text_area.empty();
			generate_paragraph(length, para_length, extras);
			$copy_button.fadeIn();
			$confirm_copy.fadeOut();
		}
		
	});

	var generate_paragraph = function(length, para_length, extras, quotes_length){
		var quip;
		for (var i = length; i > 0; i--){
			if (i === length && extras === "hi-boys"){
				quip = "Hi boys. I'm Tina. ";
			}else{
				quip = '';
			}
			generate_text(para_length, extras, quip, quotes_length);
		}
	}

	var generate_text = function(para_length, extras, quip, quotes_length){	
		var holder = $('<p>');
		for (var i = 0; i < para_length; i++){

			//randomize through the array
			if (i === 0){
				holder.prepend(quip);
			}else {
				var random = quotes[Math.floor(Math.random()*quotes.length)]; 
				holder.append(random + " ");

				holder.addClass('spacer');

			}
			$text_area.append(holder);
		}
	}

	var featured_quote = function(){
		var random = best_quotes[Math.floor(Math.random()*best_quotes.length)];
		$featured_quote.append("&#8220;" + random + "&#8221;");
	}

	var best_quotes = [
		"She grabbed Jimmy Jr's butt and changed the world.",
		"Your ass is grass and I'm gonna mow it.",
		"I'm no hero. I just put my bra on one boob at a time.",
		"Here's a bunch of numbers. They may look random but they're my phone number."
	]

	var quotes = [
		"If we see any mermaids, I'm gonna ask them where their merginas are.",
		"Follow me fellas...Lets go somewhere where the sixteen of us can be alone.",
		"Everyone began to touch each other's butts.",
		"There is one place I like to go. The boys' locker room. You can only see up to their ankles.",
		"Chad the Zombie touched the butt of that girl with the frosted hair from my art class. I think her name is Kristi.",
		"And I'm gonna read it to the whole school myself.",
		"This is such a snore-gasm.",
		"This is like watching two monkeys at the puberty zoo.",
		"I texted back a smiley face. She texted back some letters I don't understand.",
		"Tina reached towards Jimmy Junior's butt: 'Your lips say no but your butt says yes.'",
		"It's not meant to be hilarious. It's supposed to be erotic.",
		"It includes material that may not be suitable for all ages.",
		"Everyone touched each other's butts, and it was great.",
		"It's an erotic friend fiction story that I just wrote. I hope you like it, because you're all in it. It's called 'Buttloose.'",
		"Suddenly, Tina Belcher appeared in the doorway. She knew what she had to do.",
		"Everything I know to be true just went out the window.",
		"Give them ridiculous French accents.",
		"There's a lot of carrots in that stew.",
		"Your body.",
		"I know how the shark thinks. It's confused. It doesn't know why we want to kill it. It just wants to go home.",
		"You had me at horses, but then you lost me at corpses.",
		"I'm torn. Dad raised me, but the shark gets me.",
		"How do you know a python ate it? Did it leave a note?",
		"I'm not spooked. What's the next thing after spooked? I'm that.",
		"Gene, you saved us. I owe you my life.",
		"I guess she doesn't like wearing clothes.",
		"You won't regret it, dad. When I kiss Jimmy Jr. under the disco ball, it'll be like we're all kissing Jimmy Jr under the disco ball.",
		"Your father is a very damp sleeper.",
		"Dad, you're the best pimp a girl could ever have.",
		"Detention is no big deal. Don't have a crap attack.",
		"Crap attack? Don't have one?",
		"Please don't tell Mom and Dad.",
		"I don't know. Eating lobster? It goes against everything we were taught to believe.",
		"I'm compiling a list of people I can mate with to repopulate the Earth.",
		"Sausage leather belts.",
		"I'm gonna write the most erotic, graphic, freakiest friend fiction ever.",
		"She grabbed Jimmy Jr's butt and changed the world.",
		"I'm out of control.",
		"Dad, if you believe you're beautiful, you will be. I did.",
		"This is where I thrash.",
		"Let's raise our glasses!",
		"I'm a smart, strong, sensual woman.",
		"The hand wants what the hand wants.",
		"Thank you zombie boyfriends.",
		"Ok then, see you on our date!",
		"YOU GORGEOUS IDIOT!",
		"Hi boys. I'm Tina.",
		"My hearttttttttt.",
		"I want a dry erase board so I can write down all my private thoughts and then erase them immediately.",
		"Buns...sen.",
		"uhhhhhhhhhhhhhhhh",
		"uhhhhhhh",
		"He did? That's the sleaziest, sneakiest, most romantic thing anyone's ever done to me.",
		"Jimmy Jr. had a chance to ride the Tina truck, but now it's headed straight for Joshville. Toot-toot.",
		"We can make this work. We can work out a dating wheel, just like a chore wheel. Let's put the try in triangle.",
		"Dr. Yap is dreamy. When he's looking at my molars, it's like he's looking into my soul.",
		"Dr. Yap, once I was into you, but after seeing you torture my father, I think we should just be friends with dental benefits.",
		"Dear Diary: Tonight I'm sneaking off to the abandoned taffy factory to look for treasure. Also, if boys had uteruses, they'd be called duderuses.",
		"Brr, it sure is cold in here. I wish some strong, chivalrous man would lend me his jacket, or his pants.",
		"The second time hurt the most.",
		"Dad, I need you to drop everything and shave my legs.",
		"Your ass is grass and I'm gonna mow it.",
		"I didn't know our county was bi. Good for us.",
		"If I drunk text you and you're asleep, don't text me in the morning…that ship has sailed.",
		"I've logged over 3,000 fantasy hours on my relationship with Jimmy Jr. You don't just throw that away.",
		"If you need me, I'll be down here on the floor. Dying.",
		"Hey, you don't want to mess with my sister. She'll wear down your self esteem over a period of years.",
		"Here's a bunch of numbers. They may look random but they're my phone number.",
		"Butts.",
		"Is it possible to be in love with 25 people at once?",
		"Ugg, my heart just pooped its pants.",
		"Just when I think I'm out, those cheeks pull me right back in.",
		"Time for the charm bomb to explode.",
		"Hey Jimmy Jr. Did you see those two squirrels fighting in the courtyard?",
		"I've been using the toilet like an idiot.",
		"I need both ears to hold up my glasses.",
		"I'll wave at you every day.",
		"Not if you're a fish.",
		"There's someone behind the milk. Maybe it's the dairy fairy.",
		"I need to find a boy with a turtle bite on his finger.",
		"I could go to jail, or hell, or jail-hell.",
		"You're right. I'm a firestarter and a jinx. I'm going to destroy this whole family.",
		"I had no idea there was so much butt touching in baseball.",
		"If I were a hamburger you'd come and watch!",
		"My boob?",
		"Explore the morgue?",
		"I thought I saw a baby bump.",
		"Do you think horses get songs stuck in their heads?",
		"I'm no hero. I just put my bra on one boob at a time.",
		"Argh!... Wait, I like the library.",
		"Our toaster is also confused. It doesn't know where bagels go.",
	 	"So I think I'm being attacked by zombies and I start screaming, 'Do you wanna make out?' And I make out with it.",
	 	"I can't tell where your back ends and your butt begins."
	];


})(window.jQuery);