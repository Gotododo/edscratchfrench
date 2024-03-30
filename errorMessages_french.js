/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *@author ben@microbric.com <Ben Hayton>
 *@translator language=french <Gotododo>  => thx to the work of <Pavel Stržínek> for language=czech
 */
//Article number: 2.2.2.4.3


'use strict';

//goog.provide('Blockly.Blocks.operators');


goog.require('Blockly.Blocks');

Blockly.redErrorMessages = {
	"ObsSetting": 		"Les blocs de 'détection d'obstacle' ne fonctionnent pas à moins d'allumer le rayon de détection d'obstacles en utilisant le bloc 'rayon de détection d'obstacles' de la catégorie 'Capteurs'.",
	"ObsSettingEvent":	"Les évènements de 'détection d'obstacle' ne fonctionnent pas à moins d'allumer le rayon de détection d'obstacles en utilisant le bloc 'rayon de détection d'obstacles' de la catégorie 'Capteurs' dans le programme principal.",
	"LineSetting": 		"Les blocs de 'détection de ligne' ne fonctionnent pas à moins d'allumer la DEL de détection de ligne en utilisant le bloc 'DEL de suivi de ligne' de la catégorie 'Capteurs'.",
	"LineSettingEvent": "Les blocs de 'détection de ligne' ne fonctionnent pas à moins d'allumer la DEL de détection de ligne en utilisant le bloc 'DEL de suivi de ligne' de la catégorie 'Capteurs'.",
	"DriveClap": 		"Edison ne peut pas détecter les sons en roulant car les moteurs sont trop bruyants.",
	"EmptyInForwards": 	"Les blocs 'Avance jusqu'à' ont besoin d'une condition.",
	"EmptyInBackwards": "Les blocs 'Recule jusqu'à' ont besoin d'une condition.",
	"EmptyInLeft": 		"Les blocs 'À gauche jusqu'à' ont besoin d'une condition.",
	"EmptyInRight": 	"Les blocs 'À droite jusqu'à' ont besoin d'une condition.",
	"EmptyInSetVar": 	"Les blocs 'Définir une variable' ont besoin d'une variable.",
	"EmptyInIncVar": 	"Les blocs 'Incrémenter une variable' ont besoin d'une variable.",
	"EmptyInDecVar": 	"Les blocs 'Décrémenter une variable' ont besoin d'une variable.",
	"EmptyInIf": 		"Les blocs 'Si' ont besoin d'une condition.",
	"EmptyInIfElse": 	"Les blocs 'Si-sinon' ont besoin d'une condition.",
	"EmptyInWait": 		"Les blocs 'Attendre jusqu'à' ont besoin d'une condition.",
	"EmptyInWaitMilli":	"Les blocs 'Attendre millisecondes' ont besoin d'une valeur.",
	"EmptyInRep": 		"Les blocs 'Répéter jusqu'à' ont besoin d'une condition."",
	"EmptyInBSright": 	"Les blocs 'Décaler un bit à droite' ont besoin d'une variable.",
	"EmptyInBSleft": 	"Les blocs 'Décaler un bit à gauche' ont besoin d'une variable.",
	"EmptyInOperatorNot": 		"Les blocs 'Non' ont besoin d'une condition.",
	"EmptyInOperatorAnd": 		"Les blocs 'Et' ont besoin d'une condition.",
	"EmptyInOperatorOr": 		"Les blocs 'Ou' ont besoin d'une condition.",
	"EmptyBackMusic":	"Les blocs de regroupement 'Jouer une musique en fond' doivent contenir au moins un bloc 'note'.",
	"NoStart": 			"Les programmes doivent avoir un évènement 'Démarrer' pour fonctionner correctement. Si vous voyez ce message, lancez un nouveau programme en allant dans le menu et en sélectionnant 'Nouveau'.",
	"NotBackMusic":		"Les blocs de regroupement 'Jouer une musique en fond' ne peuvent contenir que des blocs de 'note'.",
	"NoMainBlocks": 	"Il n'y a pas de blocs connectés à l'évènement 'Démarrer', il n'y a donc aucun programme principal à lancer pour Edison.",
  "EmptyInUSBreceived": "Les blocs 'en attente de données USB' ont besoin d'une variable.",
  "UsbInDriveDisBackwards": false,
  "UsbInDriveDisLeft": false,
  "UsbInDriveDisRight": false,
  "UsbInDriveUntilForwards": false,
  "UsbInDriveUntilBackwards": false,
  "UsbInDriveUntilLeft": false,
  "UsbInDriveUntilRight": false,
};
Blockly.yellowErrorMessages = {
	"recMessObsOn": 		"Edison ne peut pas recevoir de messages tant que la 'détection d'obstacles' est active. Soyez certain d'avoir désactivé la détection d'obstacle dans le programme avant de tenter de recevoir un message.",
	"recRemoteObsOn": 		"Edison ne peut pas recevoir de signaux de télécommande tant que la 'détection d'obstacles' est active. Soyez certain d'avoir désactivé la détection d'obstacle dans le programme avant de tenter de recevoir un signal de télécommande.",
	"recMessEventObsOn": 	"Edison ne peut pas recevoir de messages tant que la 'détection d'obstacles' est active. Soyez certain d'avoir désactivé la détection d'obstacle dans le programme principal avant de tenter de recevoir un message.",
	"recRemoteEventObsOn": 	"Edison ne peut pas recevoir de signaux de télécommande tant que la 'détection d'obstacles' est active. Soyez certain d'avoir désactivé la détection d'obstacle dans le programme principal avant de tenter de recevoir un signal de télécommande.",
	"readLineLightLedOff": 	"Prenez soin de bien allumer la DEL de détection de ligne en utilisant le bloc 'DEL de détection de ligne' de la catégorie 'Capteurs' si vous souhaitez mesurer la réflexion de la surface ",
	"waitOppUntil": 		"Blok 'operátor' v bloku 'čekej dokud nenastane' může způsobit, že Edison bude čekat nekonečně dlouho nebo blok 'čekej' přeskočí.",
	"repeatOppUntil": 		"Blok 'operátor' v bloku 'opakuj dokud nenastane' může způsobit, že Edison bude provádět cyklus nekonečně dlouho nebo blok 'opakuj' přeskočí.",
	"waitOpp": 				"Blok 'operátor' v bloku 'čekej' může způsobit, že Edison blok 'čekej' přeskočí.",
	"repeatOpp": 			"Blok 'operátor' v bloku 'opakuj' může způsobit, že Edison blok 'opakuj' přeskočí.",
	"driveForwardsOpp": 	"Blok 'operátor' v bloku 'jeď vpřed dokud nenastane' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'jeď vpřed' přeskočí.",
	"driveBackwardsOpp": 	"Blok 'operátor' v bloku 'jeď vzad dokud nenastane' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'jeď vzad' přeskočí.",
	"driveLeftOpp": 		"Blok 'operátor' v bloku 'doleva dokud nenastane' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'doleva' přeskočí.",
	"driveRightOpp": 		"Blok 'operátor' v bloku 'doprava dokud nenastane' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'doprava' přeskočí.",
  "driveForwardsDistOpp": 	"Blok 'operátor' v bloku 'jeď vpřed' může způsobit, že Edison blok 'jeď vpřed' přeskočí.",
	"driveBackwardsDisOpp": 	"Blok 'operátor' v bloku 'jeď vzad' může způsobit, že Edison blok 'jeď vzad' přeskočí.",
	"driveLeftDisOpp": 		"Blok 'operátor' v bloku 'jeď doleva' může způsobit, že Edison blok 'jeď doleva' přeskočí.",
	"driveRightDisOpp": 		"Blok 'operátor' v bloku 'jeď doprava' může způsobit, že Edison blok 'jeď doprava' přeskočí.",
  "DriveLight" : "Blok 'úroveň světla' v bloku 'jeď' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'jeď' přeskočí.",
  "IRMessageOpps" :   "Blok 'operátor' v bloku 'pošli IR zprávu' nebude schopen poslat hodnotu větší než 255.",
	"foreverLoopIn": 		"Blok 'opakuj stále' bude pokračovat, dokud nezmáčkneš na Edisonu čtvercové tlačítko.",
	"setMotorLeft": 		"Blok 'nastav levý motor' jen zapne levý motor. Ujisti se, že používáš další bloky v programu k ovládání délky běhu motoru.",
	"setMotorRight": 		"Blok 'nastav pravý motor' jen zapne pravý motor. Ujisti se, že používáš další bloky v programu k ovládání délky běhu motoru.",
	"setMotorBoth": 		"Blok 'nastav oba motory' jen zapne motory. Ujisti se, že používáš další bloky v programu k ovládání délky běhu motorů.",
	"clapEventDrive": 		"Jízda motorů vytváří hluk, který může způsobit spuštění události tlesknutí. To může způsobit opakované spuštění bloků události tlesknutí při Edisonově jízdě.",
	"floatBlocks": 			"Bloky nepřipojené ke žlutým blokům událostí nebudou nahrány do Edisona.",
	"waitTimeLight": 		"Úroveň světla bude nastavena na vysokou hodnotu, což může způsobit, že Edison bude čekat dlouho.",
	"repLoopLight": 		"Úroveň světla bude nastavena na vysokou hodnotu, což může způsobit, že Edison bude opakovat cyklus dlouho.",
	"driveStrain":			"Blok 'zablokované motory' zjistí zablokování motorů, jen pokud jsou motory spuštěny.",
	"driveStrainEvent":		"K událost 'motory zablokovány' může dojít, jen pokud jsou motory spuštěny.",
  "comment":				"Komentáře jsou pomocné poznámky. Bloky komentářů nebudou nahrány do Edisona.",
  "usbUsed":				"USB bloky vyžadují, aby byl Edison připojen k zařízení.",
  "clearObs": 			"Nějaká data senzorů jsou uložena v Edisonově paměti. Může být nezbytné smazat tato data, aby tvůj program fungoval správně. <a href='https://meetedison.com/robot-programming-software/edscratch/edscratch-warning-messages/#clear-data-message' target='_blank'>Voir (en anglais)</a>",
  "clearClap": 			"Nějaká data senzorů jsou uložena v Edisonově paměti. Může být nezbytné smazat tato data, aby tvůj program fungoval správně. <a href='https://meetedison.com/robot-programming-software/edscratch/edscratch-warning-messages/#clear-data-message' target='_blank'>Více (v angličtině)</a>",
  "clearKey": 			"Nějaká data senzorů jsou uložena v Edisonově paměti. Může být nezbytné smazat tato data, aby tvůj program fungoval správně. <a href='https://meetedison.com/robot-programming-software/edscratch/edscratch-warning-messages/#clear-data-message' target='_blank'>Více (v angličtině)</a>",
  "clearRemote": 			"Nějaká data senzorů jsou uložena v Edisonově paměti. Může být nezbytné smazat tato data, aby tvůj program fungoval správně. <a href='https://meetedison.com/robot-programming-software/edscratch/edscratch-warning-messages/#clear-data-message' target='_blank'>Více (v angličtině)</a>",
  "clearIR": 				"Nějaká data senzorů jsou uložena v Edisonově paměti. Může být nezbytné smazat tato data, aby tvůj program fungoval správně. <a href='https://meetedison.com/robot-programming-software/edscratch/edscratch-warning-messages/#clear-data-message' target='_blank'>Více (v angličtině)</a>",

};
