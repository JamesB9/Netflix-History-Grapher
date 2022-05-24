import './App.css';
import {readFile, extractNetflixData2} from './file_parser.js'
import DropdownSelector from './components/DropdownSelector.js';

const treeData = {
  "name": "Parent",
  "id": "0",
  "children": [
    {
      "name": "Star Trek",
      "id": "0",
      "children": [
        {
          "name": "Voyager",
          "id": "0",
          "children": [
            {
              "name": "Season 2",
              "id": "0",
              "children": [
                {
                  "name": "Death Wish\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Dreadnought\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "Meld\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "Threshold\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "Alliances\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "Prototype\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "Resistance\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "Maneuvers\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Cold Fire\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "Tattoo\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "Persistence of Vision\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "Parturition\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "Twisted\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "Non Sequitur\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "Elogium\"",
                  "id": "14",
                  "children": []
                },
                {
                  "name": "Projections\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "Initiations\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "The 37's\"",
                  "id": "17",
                  "children": []
                }
              ]
            },
            {
              "name": "Season 1",
              "id": "1",
              "children": [
                {
                  "name": "Learning Curve\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Jetrel\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "Faces\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "Cathexis\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "Heroes and Demons\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "State of Flux\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "Prime Factors\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "Emanations\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Ex Post Facto\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "Eye of the Needle\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "The Cloud\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "Phage\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "Time and Again\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "Parallax\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "Caretaker",
                  "id": "14",
                  "children": [
                    {
                      "name": "Parts 1 & 2\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Deep Space Nine",
          "id": "1",
          "children": [
            {
              "name": "Season 7",
              "id": "0",
              "children": [
                {
                  "name": "What You Leave Behind",
                  "id": "0",
                  "children": [
                    {
                      "name": "Parts 1 & 2\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "The Dogs of War",
                  "id": "1",
                  "children": [
                    {
                      "name": "Part 8\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "Extreme Measures",
                  "id": "2",
                  "children": [
                    {
                      "name": "Part 7\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "Tacking Into the Wind",
                  "id": "3",
                  "children": [
                    {
                      "name": "Part 6\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "When It Rains ...",
                  "id": "4",
                  "children": [
                    {
                      "name": "Part 5\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "The Changing Face of Evil",
                  "id": "5",
                  "children": [
                    {
                      "name": "Part 4\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "Strange Bedfellows",
                  "id": "6",
                  "children": [
                    {
                      "name": "Part 3\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "Till Death Do Us Part",
                  "id": "7",
                  "children": [
                    {
                      "name": "Part 2\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "Treachery",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "Penumbra",
                  "id": "9",
                  "children": [
                    {
                      "name": "Part 1\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "Inter Arma Enim Silent Leges\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "Badda-Bing Badda-Bang\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "Chimera\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "Field of Fire\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "The Emperor's New Cloak\"",
                  "id": "14",
                  "children": []
                },
                {
                  "name": "Prodigal Daughter\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "It's Only a Paper Moon\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "Covenant\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "The Siege of AR-558\"",
                  "id": "18",
                  "children": []
                },
                {
                  "name": "Once More Unto the Breach\"",
                  "id": "19",
                  "children": []
                },
                {
                  "name": "Chrysalis\"",
                  "id": "20",
                  "children": []
                },
                {
                  "name": "Take Me Out to the Holo-Suite\"",
                  "id": "21",
                  "children": []
                },
                {
                  "name": "Afterimage\"",
                  "id": "22",
                  "children": []
                },
                {
                  "name": "Shadows and Symbols\"",
                  "id": "23",
                  "children": []
                },
                {
                  "name": "Image in the Sand\"",
                  "id": "24",
                  "children": []
                }
              ]
            },
            {
              "name": "Season 6",
              "id": "1",
              "children": [
                {
                  "name": "Tears of the Prophets\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "The Sound of Her Voice\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "Time's Orphan\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "Profit and Lace\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "Valiant\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "The Reckoning\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "His Way\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "In the Pale Moonlight\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Inquisition\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "Wrongs Darker than Death or Night\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "Change of Heart\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "Honor Among Thieves\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "One Little Ship\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "Far Beyond the Stars\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "Who Mourns for Morn?\"",
                  "id": "14",
                  "children": []
                },
                {
                  "name": "Waltz\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "The Magnificent Ferengi\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "Statistical Probabilities\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "Resurrection\"",
                  "id": "18",
                  "children": []
                },
                {
                  "name": "You Are Cordially Invited ..\"",
                  "id": "19",
                  "children": []
                },
                {
                  "name": "Sacrifice of Angels\"",
                  "id": "20",
                  "children": []
                },
                {
                  "name": "Favor the Bold\"",
                  "id": "21",
                  "children": []
                },
                {
                  "name": "Behind the Lines\"",
                  "id": "22",
                  "children": []
                },
                {
                  "name": "Sons and Daughters\"",
                  "id": "23",
                  "children": []
                },
                {
                  "name": "Rocks and Shoals\"",
                  "id": "24",
                  "children": []
                },
                {
                  "name": "A Time to Stand\"",
                  "id": "25",
                  "children": []
                }
              ]
            },
            {
              "name": "Season 5",
              "id": "2",
              "children": [
                {
                  "name": "Call to Arms\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "In the Cards\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "Empok Nor\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "Blaze of Glory\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "Children of Time\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "Soldiers of the Empire\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "Ferengi Love Songs\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "Ties of Blood and Water\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Business as Usual\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "A Simple Investigation\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "Doctor Bashir",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "By Inferno's Light\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "In Purgatory's Shadow\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "For the Uniform\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "The Begotten\"",
                  "id": "14",
                  "children": []
                },
                {
                  "name": "The Darkness and the Light\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "Rapture\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "The Ascent\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "Things Past\"",
                  "id": "18",
                  "children": []
                },
                {
                  "name": "Let He Who Is Without Sin..\"",
                  "id": "19",
                  "children": []
                },
                {
                  "name": "Trials and Tribble-ations\"",
                  "id": "20",
                  "children": []
                },
                {
                  "name": "The Assignment\"",
                  "id": "21",
                  "children": []
                },
                {
                  "name": "...Nor the Battle to the Strong\"",
                  "id": "22",
                  "children": []
                },
                {
                  "name": "Looking for Par'Mach in All the Wrong Places\"",
                  "id": "23",
                  "children": []
                },
                {
                  "name": "The Ship\"",
                  "id": "24",
                  "children": []
                },
                {
                  "name": "Apocalypse Rising\"",
                  "id": "25",
                  "children": []
                }
              ]
            },
            {
              "name": "Season 4",
              "id": "3",
              "children": [
                {
                  "name": "Broken Link\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Body Parts\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "The Quickening\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "To the Death\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "For the Cause\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "The Muse\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "Shattered Mirror\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "Hard Time\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Rules of Engagement\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "Accession\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "Bar Association\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "Sons of Mogh\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "Return to Grace\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "Crossfire\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "Starship Down\"",
                  "id": "14",
                  "children": []
                },
                {
                  "name": "Paradise Lost\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "Homefront\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "Our Man Bashir\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "The Sword of Kahless\"",
                  "id": "18",
                  "children": []
                },
                {
                  "name": "Little Green Men\"",
                  "id": "19",
                  "children": []
                },
                {
                  "name": "Rejoined\"",
                  "id": "20",
                  "children": []
                },
                {
                  "name": "Indiscretion\"",
                  "id": "21",
                  "children": []
                },
                {
                  "name": "Hippocratic Oath\"",
                  "id": "22",
                  "children": []
                },
                {
                  "name": "The Visitor\"",
                  "id": "23",
                  "children": []
                },
                {
                  "name": "The Way of the Warrior",
                  "id": "24",
                  "children": [
                    {
                      "name": "Parts 1 & 2\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "Season 3",
              "id": "4",
              "children": [
                {
                  "name": "The Adversary\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Facets\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "Shakaar\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "Family Business\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "Explorers\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "The Die Is Cast\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "Improbable Cause\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "Through the Looking Glass\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Distant Voices\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "Visionary\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "Prophet Motive\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "Destiny\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "Heart of Stone\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "Life Support\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "Past Tense",
                  "id": "14",
                  "children": [
                    {
                      "name": "Part 2\"",
                      "id": "0",
                      "children": []
                    },
                    {
                      "name": "Part 1\"",
                      "id": "1",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "Fascination\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "Defiant\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "Meridian\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "Civil Defense\"",
                  "id": "18",
                  "children": []
                },
                {
                  "name": "The Abandoned\"",
                  "id": "19",
                  "children": []
                },
                {
                  "name": "Second Skin\"",
                  "id": "20",
                  "children": []
                },
                {
                  "name": "Equilibrium\"",
                  "id": "21",
                  "children": []
                },
                {
                  "name": "The House of Quark\"",
                  "id": "22",
                  "children": []
                },
                {
                  "name": "The Search",
                  "id": "23",
                  "children": [
                    {
                      "name": "Part 2\"",
                      "id": "0",
                      "children": []
                    },
                    {
                      "name": "Part 1\"",
                      "id": "1",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "Season 2",
              "id": "5",
              "children": [
                {
                  "name": "The Jem'Hadar\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Tribunal\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "The Collaborator\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "Crossover\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "The Wire\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "The Maquis",
                  "id": "5",
                  "children": [
                    {
                      "name": "Part 2\"",
                      "id": "0",
                      "children": []
                    },
                    {
                      "name": "Part 1\"",
                      "id": "1",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "Blood Oath\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "Profit and Loss\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Playing God\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "Shadow Play\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "Paradise\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "Whispers\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "Armageddon Game\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "The Alternate\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "Rivals\"",
                  "id": "14",
                  "children": []
                },
                {
                  "name": "Sanctuary\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "Second Sight\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "Necessary Evil\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "Rules of Acquisition\"",
                  "id": "18",
                  "children": []
                },
                {
                  "name": "Melora\"",
                  "id": "19",
                  "children": []
                },
                {
                  "name": "Cardassians\"",
                  "id": "20",
                  "children": []
                },
                {
                  "name": "Invasive Procedures\"",
                  "id": "21",
                  "children": []
                },
                {
                  "name": "The Siege\"",
                  "id": "22",
                  "children": []
                },
                {
                  "name": "The Circle\"",
                  "id": "23",
                  "children": []
                },
                {
                  "name": "The Homecoming\"",
                  "id": "24",
                  "children": []
                }
              ]
            },
            {
              "name": "Season 1",
              "id": "6",
              "children": [
                {
                  "name": "In the Hands of Prophets\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Duet\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "Dramatis Personae\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "The Forsaken\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "If Wishes Were Horses\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "Progress\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "The Storyteller\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "Battle Lines\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Vortex\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "The Nagus\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "Move Along Home\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "The Passenger\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "Dax\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "Q-Less\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "Captive Pursuit\"",
                  "id": "14",
                  "children": []
                },
                {
                  "name": "Babel\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "Past Prologue\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "A Man Alone\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "Emissary",
                  "id": "18",
                  "children": [
                    {
                      "name": "Parts 1 & 2\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "The Next Generation",
          "id": "2",
          "children": [
            {
              "name": "Season 7",
              "id": "0",
              "children": [
                {
                  "name": "All Good Things... Parts 1 & 2\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Preemptive Strike\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "Emergence\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "Bloodlines\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "First Born\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "Journey's End\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "Genesis\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "Eye of the Beholder\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Masks\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "Thine Own Self\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "Lower Decks\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "Sub Rosa\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "Homeward\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "The Pegasus\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "Parallels\"",
                  "id": "14",
                  "children": []
                },
                {
                  "name": "Inheritance\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "Force of Nature\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "Attached\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "Dark Page\"",
                  "id": "18",
                  "children": []
                },
                {
                  "name": "Phantasms\"",
                  "id": "19",
                  "children": []
                },
                {
                  "name": "Gambit",
                  "id": "20",
                  "children": [
                    {
                      "name": "Part 2\"",
                      "id": "0",
                      "children": []
                    },
                    {
                      "name": "Part 1\"",
                      "id": "1",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "Interface\"",
                  "id": "21",
                  "children": []
                },
                {
                  "name": "Liaisons\"",
                  "id": "22",
                  "children": []
                },
                {
                  "name": "Descent",
                  "id": "23",
                  "children": [
                    {
                      "name": "Part 2\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "Season 6",
              "id": "1",
              "children": [
                {
                  "name": "Descent",
                  "id": "0",
                  "children": [
                    {
                      "name": "Part 1\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "Timescape\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "Second Chances\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "Rightful Heir\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "Suspicions\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "Frame of Mind\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "The Chase\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "Lessons\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Starship Mine\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "Birthright",
                  "id": "9",
                  "children": [
                    {
                      "name": "Part 2\"",
                      "id": "0",
                      "children": []
                    },
                    {
                      "name": "Part 1\"",
                      "id": "1",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "Tapestry\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "Face of the Enemy\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "Aquiel\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "Ship in a Bottle\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "Chain of Command",
                  "id": "14",
                  "children": [
                    {
                      "name": "Part 2\"",
                      "id": "0",
                      "children": []
                    },
                    {
                      "name": "Part 1\"",
                      "id": "1",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "The Quality of Life\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "A Fistful of Datas\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "Rascals\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "True Q\"",
                  "id": "18",
                  "children": []
                },
                {
                  "name": "Schisms\"",
                  "id": "19",
                  "children": []
                },
                {
                  "name": "Relics\"",
                  "id": "20",
                  "children": []
                },
                {
                  "name": "Man of the People\"",
                  "id": "21",
                  "children": []
                },
                {
                  "name": "Realm of Fear\"",
                  "id": "22",
                  "children": []
                },
                {
                  "name": "Time's Arrow",
                  "id": "23",
                  "children": [
                    {
                      "name": "Part 2\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "Season 5",
              "id": "2",
              "children": [
                {
                  "name": "Time's Arrow",
                  "id": "0",
                  "children": [
                    {
                      "name": "Part 1\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "The Inner Light\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "The Next Phase\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "I",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "Imaginary Friend\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "The Perfect Mate\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "Cost of Living\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "The First Duty\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Cause and Effect\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "The Outcast\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "Ethics\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "Power Play\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "Conundrum\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "The Masterpiece Society\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "Violations\"",
                  "id": "14",
                  "children": []
                },
                {
                  "name": "Hero Worship\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "New Ground\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "A Matter of Time\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "Unification",
                  "id": "18",
                  "children": [
                    {
                      "name": "Part 2\"",
                      "id": "0",
                      "children": []
                    },
                    {
                      "name": "Part 1\"",
                      "id": "1",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "The Game\"",
                  "id": "19",
                  "children": []
                },
                {
                  "name": "Disaster\"",
                  "id": "20",
                  "children": []
                },
                {
                  "name": "Silicon Avatar\"",
                  "id": "21",
                  "children": []
                },
                {
                  "name": "Ensign Ro\"",
                  "id": "22",
                  "children": []
                },
                {
                  "name": "Darmok\"",
                  "id": "23",
                  "children": []
                },
                {
                  "name": "Redemption",
                  "id": "24",
                  "children": [
                    {
                      "name": "Part 2\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "Season 4",
              "id": "3",
              "children": [
                {
                  "name": "Redemption",
                  "id": "0",
                  "children": [
                    {
                      "name": "Part 1\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "In Theory\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "The Mind's Eye\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "The Host\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "Half A Life\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "The Drumhead\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "Qpid\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "The Nth Degree\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Identity Crisis\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "Night Terrors\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "Galaxy's Child\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "First Contact\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "Clues\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "Devil's Due\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "The Wounded\"",
                  "id": "14",
                  "children": []
                },
                {
                  "name": "Data's Day\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "The Loss\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "Final Mission\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "Future Imperfect\"",
                  "id": "18",
                  "children": []
                },
                {
                  "name": "Reunion\"",
                  "id": "19",
                  "children": []
                },
                {
                  "name": "Legacy\"",
                  "id": "20",
                  "children": []
                },
                {
                  "name": "Remember Me\"",
                  "id": "21",
                  "children": []
                },
                {
                  "name": "Suddenly Human\"",
                  "id": "22",
                  "children": []
                },
                {
                  "name": "Brothers\"",
                  "id": "23",
                  "children": []
                },
                {
                  "name": "Family\"",
                  "id": "24",
                  "children": []
                },
                {
                  "name": "The Best of Both Worlds",
                  "id": "25",
                  "children": [
                    {
                      "name": "Part 2\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "Season 3",
              "id": "4",
              "children": [
                {
                  "name": "The Best of Both Worlds",
                  "id": "0",
                  "children": [
                    {
                      "name": "Part 1\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "Transfigurations\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "Menage a Troi\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "Sarek\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "The Most Toys\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "Hollow Pursuits\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "Tin Man\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "Captain's Holiday\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Allegiance\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "Sins of the Father\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "The Offspring\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "Yesterday's Enterprise\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "A Matter of Perspective\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "Deja Q\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "The High Ground\"",
                  "id": "14",
                  "children": []
                },
                {
                  "name": "The Hunted\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "The Defector\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "The Vengeance Factor\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "The Price\"",
                  "id": "18",
                  "children": []
                },
                {
                  "name": "The Enemy\"",
                  "id": "19",
                  "children": []
                },
                {
                  "name": "Booby Trap\"",
                  "id": "20",
                  "children": []
                },
                {
                  "name": "The Bonding\"",
                  "id": "21",
                  "children": []
                },
                {
                  "name": "Who Watches the Watchers\"",
                  "id": "22",
                  "children": []
                },
                {
                  "name": "The Survivors\"",
                  "id": "23",
                  "children": []
                },
                {
                  "name": "The Ensigns of Command\"",
                  "id": "24",
                  "children": []
                },
                {
                  "name": "Evolution\"",
                  "id": "25",
                  "children": []
                }
              ]
            },
            {
              "name": "Season 2",
              "id": "5",
              "children": [
                {
                  "name": "Shades of Gray\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Peak Performance\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "The Emissary\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "Manhunt\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "Up the Long Ladder\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "Samaritan Snare\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "Q-Who?\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "Pen Pals\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "The Icarus Factor\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "Time Squared\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "The Royale\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "Contagion\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "The Dauphin\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "The Measure of a Man\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "A Matter of Honor\"",
                  "id": "14",
                  "children": []
                },
                {
                  "name": "Unnatural Selection\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "The Schizoid Man\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "Loud As a Whisper\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "The Outrageous Okona\"",
                  "id": "18",
                  "children": []
                },
                {
                  "name": "Elementary",
                  "id": "19",
                  "children": []
                },
                {
                  "name": "Where Silence Has Lease\"",
                  "id": "20",
                  "children": []
                },
                {
                  "name": "The Child\"",
                  "id": "21",
                  "children": []
                }
              ]
            },
            {
              "name": "Season 1",
              "id": "6",
              "children": [
                {
                  "name": "When The Bough Breaks\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "The Neutral Zone\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "Conspiracy\"",
                  "id": "2",
                  "children": []
                },
                {
                  "name": "We'll Always Have Paris\"",
                  "id": "3",
                  "children": []
                },
                {
                  "name": "Skin of Evil\"",
                  "id": "4",
                  "children": []
                },
                {
                  "name": "Symbiosis\"",
                  "id": "5",
                  "children": []
                },
                {
                  "name": "The Arsenal of Freedom\"",
                  "id": "6",
                  "children": []
                },
                {
                  "name": "Heart of Glory\"",
                  "id": "7",
                  "children": []
                },
                {
                  "name": "Coming of Age\"",
                  "id": "8",
                  "children": []
                },
                {
                  "name": "Home Soil\"",
                  "id": "9",
                  "children": []
                },
                {
                  "name": "Too Short a Season\"",
                  "id": "10",
                  "children": []
                },
                {
                  "name": "11001001\"",
                  "id": "11",
                  "children": []
                },
                {
                  "name": "Angel One\"",
                  "id": "12",
                  "children": []
                },
                {
                  "name": "Datalore\"",
                  "id": "13",
                  "children": []
                },
                {
                  "name": "The Big Goodbye\"",
                  "id": "14",
                  "children": []
                },
                {
                  "name": "Haven\"",
                  "id": "15",
                  "children": []
                },
                {
                  "name": "Hide and Q\"",
                  "id": "16",
                  "children": []
                },
                {
                  "name": "The Battle\"",
                  "id": "17",
                  "children": []
                },
                {
                  "name": "Justice\"",
                  "id": "18",
                  "children": []
                },
                {
                  "name": "Lonely Among Us\"",
                  "id": "19",
                  "children": []
                },
                {
                  "name": "Where No One Has Gone Before\"",
                  "id": "20",
                  "children": []
                },
                {
                  "name": "The Last Outpost\"",
                  "id": "21",
                  "children": []
                },
                {
                  "name": "Code of Honor\"",
                  "id": "22",
                  "children": []
                },
                {
                  "name": "The Naked Now\"",
                  "id": "23",
                  "children": []
                },
                {
                  "name": "Encounter at Farpoint",
                  "id": "24",
                  "children": [
                    {
                      "name": "Parts 1 & 2\"",
                      "id": "0",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "The Animated Series",
          "id": "3",
          "children": [
            {
              "name": "Season 1",
              "id": "0",
              "children": [
                {
                  "name": "One of Our Planets Is Missing\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Yesteryear\"",
                  "id": "1",
                  "children": []
                },
                {
                  "name": "Beyond the Farthest Star\"",
                  "id": "2",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "name": "Season 3",
          "id": "4",
          "children": [
            {
              "name": "Turnabout Intruder\"",
              "id": "0",
              "children": []
            },
            {
              "name": "All Our Yesterdays\"",
              "id": "1",
              "children": []
            },
            {
              "name": "The Savage Curtain\"",
              "id": "2",
              "children": []
            },
            {
              "name": "The Cloud Minders\"",
              "id": "3",
              "children": []
            },
            {
              "name": "The Way to Eden\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Requiem for Methuselah\"",
              "id": "5",
              "children": []
            },
            {
              "name": "The Lights of Zetar\"",
              "id": "6",
              "children": []
            },
            {
              "name": "That Which Survives\"",
              "id": "7",
              "children": []
            },
            {
              "name": "The Mark of Gideon\"",
              "id": "8",
              "children": []
            },
            {
              "name": "Let That Be Your Last Battlefield\"",
              "id": "9",
              "children": []
            },
            {
              "name": "Whom Gods Destroy\"",
              "id": "10",
              "children": []
            },
            {
              "name": "Elaan of Troyius\"",
              "id": "11",
              "children": []
            },
            {
              "name": "The Empath\"",
              "id": "12",
              "children": []
            },
            {
              "name": "Wink of an Eye\"",
              "id": "13",
              "children": []
            },
            {
              "name": "Plato's Stepchildren\"",
              "id": "14",
              "children": []
            },
            {
              "name": "The Tholian Web\"",
              "id": "15",
              "children": []
            },
            {
              "name": "For the World Is Hollow and I Have Touched the Sky\"",
              "id": "16",
              "children": []
            },
            {
              "name": "Day of the Dove\"",
              "id": "17",
              "children": []
            },
            {
              "name": "Spectre of the Gun\"",
              "id": "18",
              "children": []
            },
            {
              "name": "Is There In Truth No Beauty?\"",
              "id": "19",
              "children": []
            },
            {
              "name": "And the Children Shall Lead\"",
              "id": "20",
              "children": []
            },
            {
              "name": "The Paradise Syndrome\"",
              "id": "21",
              "children": []
            },
            {
              "name": "The Enterprise Incident\"",
              "id": "22",
              "children": []
            },
            {
              "name": "Spock's Brain\"",
              "id": "23",
              "children": []
            }
          ]
        },
        {
          "name": "Season 2",
          "id": "5",
          "children": [
            {
              "name": "Assignment",
              "id": "0",
              "children": [
                {
                  "name": "Earth\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Bread and Circuses\"",
              "id": "1",
              "children": []
            },
            {
              "name": "The Ultimate Computer\"",
              "id": "2",
              "children": []
            },
            {
              "name": "The Omega Glory\"",
              "id": "3",
              "children": []
            },
            {
              "name": "By Any Other Name\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Patterns of Force\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Return to Tomorrow\"",
              "id": "6",
              "children": []
            },
            {
              "name": "A Private Little War\"",
              "id": "7",
              "children": []
            },
            {
              "name": "The Immunity Syndrome\"",
              "id": "8",
              "children": []
            },
            {
              "name": "A Piece of the Action\"",
              "id": "9",
              "children": []
            },
            {
              "name": "The Gamesters of Triskelion\"",
              "id": "10",
              "children": []
            },
            {
              "name": "The Trouble with Tribbles\"",
              "id": "11",
              "children": []
            },
            {
              "name": "Wolf in the Fold\"",
              "id": "12",
              "children": []
            },
            {
              "name": "Obsession\"",
              "id": "13",
              "children": []
            },
            {
              "name": "The Deadly Years\"",
              "id": "14",
              "children": []
            },
            {
              "name": "Friday's Child\"",
              "id": "15",
              "children": []
            },
            {
              "name": "Journey to Babel\"",
              "id": "16",
              "children": []
            },
            {
              "name": "Metamorphosis\"",
              "id": "17",
              "children": []
            },
            {
              "name": "I",
              "id": "18",
              "children": []
            },
            {
              "name": "Catspaw\"",
              "id": "19",
              "children": []
            },
            {
              "name": "The Doomsday Machine\"",
              "id": "20",
              "children": []
            },
            {
              "name": "The Apple\"",
              "id": "21",
              "children": []
            },
            {
              "name": "Mirror",
              "id": "22",
              "children": []
            },
            {
              "name": "The Changeling\"",
              "id": "23",
              "children": []
            },
            {
              "name": "Who Mourns for Adonais?\"",
              "id": "24",
              "children": []
            },
            {
              "name": "Amok Time\"",
              "id": "25",
              "children": []
            }
          ]
        },
        {
          "name": "Season 1",
          "id": "6",
          "children": [
            {
              "name": "Operation",
              "id": "0",
              "children": [
                {
                  "name": "Annihilate!\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "The City on the Edge of Forever\"",
              "id": "1",
              "children": []
            },
            {
              "name": "The Alternative Factor\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Errand of Mercy\"",
              "id": "3",
              "children": []
            },
            {
              "name": "The Devil in the Dark\"",
              "id": "4",
              "children": []
            },
            {
              "name": "This Side of Paradise\"",
              "id": "5",
              "children": []
            },
            {
              "name": "A Taste of Armageddon\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Space Seed\"",
              "id": "7",
              "children": []
            },
            {
              "name": "The Return of the Archons\"",
              "id": "8",
              "children": []
            },
            {
              "name": "Court Martial\"",
              "id": "9",
              "children": []
            },
            {
              "name": "Tomorrow Is Yesterday\"",
              "id": "10",
              "children": []
            },
            {
              "name": "Arena\"",
              "id": "11",
              "children": []
            },
            {
              "name": "The Squire of Gothos\"",
              "id": "12",
              "children": []
            },
            {
              "name": "The Galileo Seven\"",
              "id": "13",
              "children": []
            },
            {
              "name": "Shore Leave\"",
              "id": "14",
              "children": []
            },
            {
              "name": "Balance of Terror\"",
              "id": "15",
              "children": []
            },
            {
              "name": "The Conscience of the King\"",
              "id": "16",
              "children": []
            },
            {
              "name": "The Menagerie",
              "id": "17",
              "children": [
                {
                  "name": "Part 2\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Part 1\"",
                  "id": "1",
                  "children": []
                }
              ]
            },
            {
              "name": "The Corbomite Maneuver\"",
              "id": "18",
              "children": []
            },
            {
              "name": "Dagger of the Mind\"",
              "id": "19",
              "children": []
            },
            {
              "name": "Miri\"",
              "id": "20",
              "children": []
            },
            {
              "name": "What Are Little Girls Made Of?\"",
              "id": "21",
              "children": []
            },
            {
              "name": "Mudd's Women\"",
              "id": "22",
              "children": []
            },
            {
              "name": "The Enemy Within\"",
              "id": "23",
              "children": []
            },
            {
              "name": "The Naked Time\"",
              "id": "24",
              "children": []
            },
            {
              "name": "Where No Man Has Gone Before\"",
              "id": "25",
              "children": []
            },
            {
              "name": "Charlie X\"",
              "id": "26",
              "children": []
            },
            {
              "name": "The Man Trap\"",
              "id": "27",
              "children": []
            },
            {
              "name": "Pilot",
              "id": "28",
              "children": [
                {
                  "name": "The Cage\"",
                  "id": "0",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "One-Punch Man",
      "id": "1",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "The Lone Cyborg\"",
              "id": "0",
              "children": []
            },
            {
              "name": "The Strongest Man\"",
              "id": "1",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Castlevania",
      "id": "2",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "Witchbottle\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Sherlock",
      "id": "3",
      "children": [
        {
          "name": "Series 1",
          "id": "0",
          "children": [
            {
              "name": "The Blind Banker\"",
              "id": "0",
              "children": []
            },
            {
              "name": "A Study in Pink\"",
              "id": "1",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "After Life",
      "id": "4",
      "children": [
        {
          "name": "Season 2",
          "id": "0",
          "children": [
            {
              "name": "Episode 6\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Episode 5\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Episode 4\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Episode 3\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Episode 2\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Episode 1\"",
              "id": "5",
              "children": []
            }
          ]
        },
        {
          "name": "Season 1",
          "id": "1",
          "children": [
            {
              "name": "Episode 6\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Episode 5\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Episode 4\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Episode 3\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Episode 2\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Episode 1\"",
              "id": "5",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "The Last Kingdom",
      "id": "5",
      "children": [
        {
          "name": "Season 3",
          "id": "0",
          "children": [
            {
              "name": "Episode 3\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Season 2",
          "id": "1",
          "children": [
            {
              "name": "Episode 4\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Season 1",
          "id": "2",
          "children": [
            {
              "name": "Episode 6\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Episode 5\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Episode 4\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Episode 3\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Episode 2\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Episode 1\"",
              "id": "5",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Doctor Who",
      "id": "6",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "Rose\"",
              "id": "0",
              "children": []
            },
            {
              "name": "The Parting of the Ways\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Bad Wolf\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Boom Town\"",
              "id": "3",
              "children": []
            },
            {
              "name": "The Doctor Dances\"",
              "id": "4",
              "children": []
            },
            {
              "name": "The Empty Child\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Father's Day\"",
              "id": "6",
              "children": []
            },
            {
              "name": "The Long Game\"",
              "id": "7",
              "children": []
            },
            {
              "name": "Dalek\"",
              "id": "8",
              "children": []
            },
            {
              "name": "World War Three\"",
              "id": "9",
              "children": []
            },
            {
              "name": "Aliens of London\"",
              "id": "10",
              "children": []
            },
            {
              "name": "The Unquiet Dead\"",
              "id": "11",
              "children": []
            },
            {
              "name": "The End of the World\"",
              "id": "12",
              "children": []
            }
          ]
        },
        {
          "name": "Season 10",
          "id": "1",
          "children": [
            {
              "name": "Twice Upon a Time\"",
              "id": "0",
              "children": []
            },
            {
              "name": "The Doctor Falls\"",
              "id": "1",
              "children": []
            },
            {
              "name": "World Enough and Time\"",
              "id": "2",
              "children": []
            },
            {
              "name": "The Eaters of Light\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Empress of Mars\"",
              "id": "4",
              "children": []
            },
            {
              "name": "The Lie of the Land\"",
              "id": "5",
              "children": []
            },
            {
              "name": "The Pyramid at the End of the World\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Extremis\"",
              "id": "7",
              "children": []
            },
            {
              "name": "Oxygen\"",
              "id": "8",
              "children": []
            },
            {
              "name": "Knock Knock\"",
              "id": "9",
              "children": []
            },
            {
              "name": "Thin Ice\"",
              "id": "10",
              "children": []
            },
            {
              "name": "Smile\"",
              "id": "11",
              "children": []
            },
            {
              "name": "The Pilot\"",
              "id": "12",
              "children": []
            },
            {
              "name": "The Return of Doctor Mysterio\"",
              "id": "13",
              "children": []
            }
          ]
        },
        {
          "name": "Season 3",
          "id": "2",
          "children": [
            {
              "name": "Blink\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Last of the Time Lords\"",
              "id": "1",
              "children": []
            },
            {
              "name": "The Sound of Drums\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Utopia\"",
              "id": "3",
              "children": []
            },
            {
              "name": "The Family of Blood\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Human Nature\"",
              "id": "5",
              "children": []
            },
            {
              "name": "42\"",
              "id": "6",
              "children": []
            },
            {
              "name": "The Lazarus Experiment\"",
              "id": "7",
              "children": []
            },
            {
              "name": "Evolution of the Daleks\"",
              "id": "8",
              "children": []
            },
            {
              "name": "Daleks in Manhattan\"",
              "id": "9",
              "children": []
            },
            {
              "name": "Gridlock\"",
              "id": "10",
              "children": []
            },
            {
              "name": "The Shakespeare Code\"",
              "id": "11",
              "children": []
            },
            {
              "name": "Smith and Jones\"",
              "id": "12",
              "children": []
            },
            {
              "name": "The Runaway Bride\"",
              "id": "13",
              "children": []
            }
          ]
        },
        {
          "name": "Season 9",
          "id": "3",
          "children": [
            {
              "name": "The Husbands of River Song\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Hell Bent\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Heaven Sent\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Face the Raven\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Sleep No More\"",
              "id": "4",
              "children": []
            },
            {
              "name": "The Zygon Inversion\"",
              "id": "5",
              "children": []
            },
            {
              "name": "The Zygon Invasion\"",
              "id": "6",
              "children": []
            },
            {
              "name": "The Woman Who Lived\"",
              "id": "7",
              "children": []
            },
            {
              "name": "The Girl Who Died\"",
              "id": "8",
              "children": []
            },
            {
              "name": "Before the Flood\"",
              "id": "9",
              "children": []
            },
            {
              "name": "Under the Lake\"",
              "id": "10",
              "children": []
            },
            {
              "name": "The Witch’s Familiar\"",
              "id": "11",
              "children": []
            },
            {
              "name": "The Magician's Apprentice\"",
              "id": "12",
              "children": []
            },
            {
              "name": "Last Christmas\"",
              "id": "13",
              "children": []
            }
          ]
        },
        {
          "name": "Season 8",
          "id": "4",
          "children": [
            {
              "name": "Death in Heaven\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Dark Water\"",
              "id": "1",
              "children": []
            },
            {
              "name": "In the Forest of the Night\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Flatline\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Mummy on the Orient Express\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Kill the Moon\"",
              "id": "5",
              "children": []
            },
            {
              "name": "The Caretaker\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Listen\"",
              "id": "7",
              "children": []
            },
            {
              "name": "Robot of Sherwood\"",
              "id": "8",
              "children": []
            },
            {
              "name": "Into the Dalek\"",
              "id": "9",
              "children": []
            },
            {
              "name": "Deep Breath\"",
              "id": "10",
              "children": []
            },
            {
              "name": "Time Heist\"",
              "id": "11",
              "children": []
            }
          ]
        },
        {
          "name": "Season 7",
          "id": "5",
          "children": [
            {
              "name": "The Time of the Doctor\"",
              "id": "0",
              "children": []
            },
            {
              "name": "The Day of the Doctor\"",
              "id": "1",
              "children": []
            },
            {
              "name": "The Name of the Doctor\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Nightmare in Silver\"",
              "id": "3",
              "children": []
            },
            {
              "name": "The Crimson Horror\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Journey to the Centre of the TARDIS\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Hide\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Cold War\"",
              "id": "7",
              "children": []
            },
            {
              "name": "The Rings of Akhaten\"",
              "id": "8",
              "children": []
            },
            {
              "name": "The Bells of Saint John\"",
              "id": "9",
              "children": []
            },
            {
              "name": "The Snowmen\"",
              "id": "10",
              "children": []
            },
            {
              "name": "The Angels Take Manhattan\"",
              "id": "11",
              "children": []
            },
            {
              "name": "The Power of Three\"",
              "id": "12",
              "children": []
            },
            {
              "name": "A Town Called Mercy\"",
              "id": "13",
              "children": []
            },
            {
              "name": "Dinosaurs on a Spaceship\"",
              "id": "14",
              "children": []
            },
            {
              "name": "Asylum of the Daleks\"",
              "id": "15",
              "children": []
            }
          ]
        },
        {
          "name": "Season 6",
          "id": "6",
          "children": [
            {
              "name": "The Doctor",
              "id": "0",
              "children": []
            },
            {
              "name": "The Wedding of River Song\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Closing Time\"",
              "id": "2",
              "children": []
            },
            {
              "name": "The God Complex\"",
              "id": "3",
              "children": []
            },
            {
              "name": "The Girl Who Waited\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Night Terrors\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Let's Kill Hitler\"",
              "id": "6",
              "children": []
            },
            {
              "name": "A Good Man Goes to War\"",
              "id": "7",
              "children": []
            },
            {
              "name": "The Almost People\"",
              "id": "8",
              "children": []
            },
            {
              "name": "The Rebel Flesh\"",
              "id": "9",
              "children": []
            },
            {
              "name": "The Doctor's Wife\"",
              "id": "10",
              "children": []
            },
            {
              "name": "The Curse of the Black Spot\"",
              "id": "11",
              "children": []
            },
            {
              "name": "Day of the Moon\"",
              "id": "12",
              "children": []
            },
            {
              "name": "The Impossible Astronaut\"",
              "id": "13",
              "children": []
            }
          ]
        },
        {
          "name": "Season 5",
          "id": "7",
          "children": [
            {
              "name": "A Christmas Carol\"",
              "id": "0",
              "children": []
            },
            {
              "name": "The Big Bang\"",
              "id": "1",
              "children": []
            },
            {
              "name": "The Lodger\"",
              "id": "2",
              "children": []
            },
            {
              "name": "The Pandorica Opens\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Vincent and the Doctor\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Cold Blood\"",
              "id": "5",
              "children": []
            },
            {
              "name": "The Hungry Earth\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Amy's Choice\"",
              "id": "7",
              "children": []
            },
            {
              "name": "The Vampires of Venice\"",
              "id": "8",
              "children": []
            },
            {
              "name": "Flesh and Stone\"",
              "id": "9",
              "children": []
            },
            {
              "name": "The Time of Angels\"",
              "id": "10",
              "children": []
            },
            {
              "name": "Victory of the Daleks\"",
              "id": "11",
              "children": []
            },
            {
              "name": "The Beast Below\"",
              "id": "12",
              "children": []
            },
            {
              "name": "The Eleventh Hour\"",
              "id": "13",
              "children": []
            }
          ]
        },
        {
          "name": "Season 4",
          "id": "8",
          "children": [
            {
              "name": "The End of Time",
              "id": "0",
              "children": [
                {
                  "name": "Part 2\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Part 1\"",
                  "id": "1",
                  "children": []
                }
              ]
            },
            {
              "name": "The Waters of Mars\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Planet of the Dead\"",
              "id": "2",
              "children": []
            },
            {
              "name": "The Next Doctor\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Journey's End\"",
              "id": "4",
              "children": []
            },
            {
              "name": "The Stolen Earth\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Turn Left\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Midnight\"",
              "id": "7",
              "children": []
            },
            {
              "name": "Forest of the Dead\"",
              "id": "8",
              "children": []
            },
            {
              "name": "Silence in the Library\"",
              "id": "9",
              "children": []
            },
            {
              "name": "The Unicorn and the Wasp\"",
              "id": "10",
              "children": []
            },
            {
              "name": "The Doctor's Daughter\"",
              "id": "11",
              "children": []
            },
            {
              "name": "The Poison Sky\"",
              "id": "12",
              "children": []
            },
            {
              "name": "The Sontaran Stratagem\"",
              "id": "13",
              "children": []
            },
            {
              "name": "Planet of the Ood\"",
              "id": "14",
              "children": []
            },
            {
              "name": "The Fires of Pompeii\"",
              "id": "15",
              "children": []
            },
            {
              "name": "Partners in Crime\"",
              "id": "16",
              "children": []
            },
            {
              "name": "Voyage of the Damned\"",
              "id": "17",
              "children": []
            }
          ]
        },
        {
          "name": "Season 2",
          "id": "9",
          "children": [
            {
              "name": "Doomsday\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Army of Ghosts\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Fear Her\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Love & Monsters\"",
              "id": "3",
              "children": []
            },
            {
              "name": "The Satan Pit\"",
              "id": "4",
              "children": []
            },
            {
              "name": "The Impossible Planet\"",
              "id": "5",
              "children": []
            },
            {
              "name": "The Idiot's Lantern\"",
              "id": "6",
              "children": []
            },
            {
              "name": "The Age of Steel\"",
              "id": "7",
              "children": []
            },
            {
              "name": "Rise of the Cybermen\"",
              "id": "8",
              "children": []
            },
            {
              "name": "The Girl in the Fireplace\"",
              "id": "9",
              "children": []
            },
            {
              "name": "School Reunion\"",
              "id": "10",
              "children": []
            },
            {
              "name": "Tooth and Claw\"",
              "id": "11",
              "children": []
            },
            {
              "name": "New Earth\"",
              "id": "12",
              "children": []
            },
            {
              "name": "The Christmas Invasion\"",
              "id": "13",
              "children": []
            }
          ]
        },
        {
          "name": "The Return of Doctor Mysterio\"",
          "id": "10",
          "children": []
        }
      ]
    },
    {
      "name": "Rick and Morty",
      "id": "7",
      "children": [
        {
          "name": "Season 2",
          "id": "0",
          "children": [
            {
              "name": "Total Rickall\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Get Schwifty\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Auto Erotic Assimilation\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Mortynight Run\"",
              "id": "3",
              "children": []
            },
            {
              "name": "A Rickle in Time\"",
              "id": "4",
              "children": []
            }
          ]
        },
        {
          "name": "Season 1",
          "id": "1",
          "children": [
            {
              "name": "Ricksy Business\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Close Rick-counters of the Rick Kind\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Something Ricked This Way Comes\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Rixty Minutes\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Raising Gazorpazorp\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Rick Potion #9\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Meeseeks and Destroy\"",
              "id": "6",
              "children": []
            },
            {
              "name": "M. Night Shaym-Aliens!\"",
              "id": "7",
              "children": []
            },
            {
              "name": "Lawnmower Dog\"",
              "id": "8",
              "children": []
            },
            {
              "name": "Anatomy Park\"",
              "id": "9",
              "children": []
            },
            {
              "name": "Pilot\"",
              "id": "10",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Merlin",
      "id": "8",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "The Dragon's Call\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Lancelot\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Le Morte d'Arthur\"",
              "id": "2",
              "children": []
            },
            {
              "name": "To Kill the King\"",
              "id": "3",
              "children": []
            },
            {
              "name": "The Labyrinth of Gedref\"",
              "id": "4",
              "children": []
            },
            {
              "name": "The Moment of Truth\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Excalibur\"",
              "id": "6",
              "children": []
            },
            {
              "name": "The Beginning of the End\"",
              "id": "7",
              "children": []
            },
            {
              "name": "The Gates of Avalon\"",
              "id": "8",
              "children": []
            },
            {
              "name": "A Remedy to Cure All Ills\"",
              "id": "9",
              "children": []
            },
            {
              "name": "The Poisoned Chalice\"",
              "id": "10",
              "children": []
            },
            {
              "name": "The Mark of Nimueh\"",
              "id": "11",
              "children": []
            },
            {
              "name": "Valiant\"",
              "id": "12",
              "children": []
            }
          ]
        },
        {
          "name": "Season 5",
          "id": "1",
          "children": [
            {
              "name": "The Diamond of the Day",
              "id": "0",
              "children": [
                {
                  "name": "Part 2\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Part 1\"",
                  "id": "1",
                  "children": []
                }
              ]
            },
            {
              "name": "The Drawing of the Dark\"",
              "id": "1",
              "children": []
            },
            {
              "name": "The Kindness of Strangers\"",
              "id": "2",
              "children": []
            },
            {
              "name": "With All My Heart\"",
              "id": "3",
              "children": []
            },
            {
              "name": "The Hollow Queen\"",
              "id": "4",
              "children": []
            },
            {
              "name": "A Lesson in Vengeance\"",
              "id": "5",
              "children": []
            },
            {
              "name": "The Dark Tower\"",
              "id": "6",
              "children": []
            },
            {
              "name": "The Disir\"",
              "id": "7",
              "children": []
            },
            {
              "name": "Another's Sorrow\"",
              "id": "8",
              "children": []
            },
            {
              "name": "The Death Song of Uther Pendragon\"",
              "id": "9",
              "children": []
            },
            {
              "name": "Arthur's Bane",
              "id": "10",
              "children": [
                {
                  "name": "Part 2\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Part 1\"",
                  "id": "1",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "name": "Season 4",
          "id": "2",
          "children": [
            {
              "name": "The Wicked Day\"",
              "id": "0",
              "children": []
            },
            {
              "name": "The Darkest Hour",
              "id": "1",
              "children": [
                {
                  "name": "Part 2\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Part 1\"",
                  "id": "1",
                  "children": []
                }
              ]
            },
            {
              "name": "Lancelot du Lac\"",
              "id": "2",
              "children": []
            },
            {
              "name": "The Sword in the Stone",
              "id": "3",
              "children": [
                {
                  "name": "Part 2\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Part 1\"",
                  "id": "1",
                  "children": []
                }
              ]
            },
            {
              "name": "The Hunter's Heart\"",
              "id": "4",
              "children": []
            },
            {
              "name": "A Herald of the New Age\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Lamia\"",
              "id": "6",
              "children": []
            },
            {
              "name": "The Secret Sharer\"",
              "id": "7",
              "children": []
            },
            {
              "name": "A Servant of Two Masters\"",
              "id": "8",
              "children": []
            },
            {
              "name": "His Father's Son\"",
              "id": "9",
              "children": []
            },
            {
              "name": "Aithusa\"",
              "id": "10",
              "children": []
            }
          ]
        },
        {
          "name": "Season 3",
          "id": "3",
          "children": [
            {
              "name": "The Coming of Arthur",
              "id": "0",
              "children": [
                {
                  "name": "Part 2\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Part 1\"",
                  "id": "1",
                  "children": []
                }
              ]
            },
            {
              "name": "The Sorcerer's Shadow\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Queen of Hearts\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Love in the Time of Dragons\"",
              "id": "3",
              "children": []
            },
            {
              "name": "The Eye of the Phoenix\"",
              "id": "4",
              "children": []
            },
            {
              "name": "The Castle of Fyrien\"",
              "id": "5",
              "children": []
            },
            {
              "name": "The Changeling\"",
              "id": "6",
              "children": []
            },
            {
              "name": "The Crystal Cave\"",
              "id": "7",
              "children": []
            },
            {
              "name": "Goblin's Gold\"",
              "id": "8",
              "children": []
            },
            {
              "name": "Gwaine\"",
              "id": "9",
              "children": []
            },
            {
              "name": "The Tears of Uther Pendragon",
              "id": "10",
              "children": [
                {
                  "name": "Part 2\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Part 1\"",
                  "id": "1",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "name": "Season 2",
          "id": "4",
          "children": [
            {
              "name": "The Last Dragonlord\"",
              "id": "0",
              "children": []
            },
            {
              "name": "The Fires of Idirsholas\"",
              "id": "1",
              "children": []
            },
            {
              "name": "The Witch's Quickening\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Sweet Dreams\"",
              "id": "3",
              "children": []
            },
            {
              "name": "The Lady of the Lake\"",
              "id": "4",
              "children": []
            },
            {
              "name": "The Sins of the Father\"",
              "id": "5",
              "children": []
            },
            {
              "name": "The Witchfinder\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Beauty and the Beast",
              "id": "7",
              "children": [
                {
                  "name": "Part 2\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Part 1\"",
                  "id": "1",
                  "children": []
                }
              ]
            },
            {
              "name": "Lancelot and Guinevere\"",
              "id": "8",
              "children": []
            },
            {
              "name": "The Nightmare Begins\"",
              "id": "9",
              "children": []
            },
            {
              "name": "The Once and Future Queen\"",
              "id": "10",
              "children": []
            },
            {
              "name": "The Curse of Cornelius Sigan\"",
              "id": "11",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "The Lord of the Rings",
      "id": "9",
      "children": [
        {
          "name": "The Return of the King\"",
          "id": "0",
          "children": []
        },
        {
          "name": "The Two Towers\"",
          "id": "1",
          "children": []
        }
      ]
    },
    {
      "name": "The Hobbit",
      "id": "10",
      "children": [
        {
          "name": "An Unexpected Journey\"",
          "id": "0",
          "children": []
        }
      ]
    },
    {
      "name": "Contagion\"",
      "id": "11",
      "children": []
    },
    {
      "name": "The Martian\"",
      "id": "12",
      "children": []
    },
    {
      "name": "Extraction\"",
      "id": "13",
      "children": []
    },
    {
      "name": "Marvel's Daredevil",
      "id": "14",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "Into the Ring\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Lucy\"",
      "id": "15",
      "children": []
    },
    {
      "name": "Fawlty Towers",
      "id": "16",
      "children": [
        {
          "name": "Series 1",
          "id": "0",
          "children": [
            {
              "name": "The Germans\"",
              "id": "0",
              "children": []
            },
            {
              "name": "The Hotel Inspectors\"",
              "id": "1",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Monty Python's Life of Brian\"",
      "id": "17",
      "children": []
    },
    {
      "name": "Friends",
      "id": "18",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "The One Where Monica Gets a Roommate (Pilot)\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Red Dwarf",
      "id": "19",
      "children": [
        {
          "name": "Series 5",
          "id": "0",
          "children": [
            {
              "name": "Back to Reality\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Series 2",
          "id": "1",
          "children": [
            {
              "name": "Queeg\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Thanks for the Memory\"",
              "id": "1",
              "children": []
            }
          ]
        },
        {
          "name": "Series 1",
          "id": "2",
          "children": [
            {
              "name": "The End\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Star Trek\"",
      "id": "20",
      "children": []
    },
    {
      "name": "Sex Education",
      "id": "21",
      "children": [
        {
          "name": "Season 2",
          "id": "0",
          "children": [
            {
              "name": "Episode 1\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Episode 8\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Episode 6\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Episode 7\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Episode 5\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Episode 4\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Episode 3\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Episode 2\"",
              "id": "7",
              "children": []
            }
          ]
        },
        {
          "name": "Season 1",
          "id": "1",
          "children": [
            {
              "name": "Episode 8\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Episode 7\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Episode 6\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Episode 5\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Episode 4\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Episode 3\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Episode 2\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Episode 1\"",
              "id": "7",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "QI",
      "id": "22",
      "children": [
        {
          "name": "Season 16",
          "id": "0",
          "children": [
            {
              "name": "Post\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Past Times\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Pathology\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Phenomenal\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Procrastination\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Potpourri\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Pain & Punishment\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Plants\"",
              "id": "7",
              "children": []
            },
            {
              "name": "Picnics\"",
              "id": "8",
              "children": []
            },
            {
              "name": "Pictures\"",
              "id": "9",
              "children": []
            },
            {
              "name": "Public and Private\"",
              "id": "10",
              "children": []
            },
            {
              "name": "Parts\"",
              "id": "11",
              "children": []
            },
            {
              "name": "Piecemeal\"",
              "id": "12",
              "children": []
            },
            {
              "name": "Peril\"",
              "id": "13",
              "children": []
            },
            {
              "name": "Panimals\"",
              "id": "14",
              "children": []
            }
          ]
        },
        {
          "name": "Season 15",
          "id": "1",
          "children": [
            {
              "name": "Operations\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Season 14",
          "id": "2",
          "children": [
            {
              "name": "New\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Next\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Numbers\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Naval Navigation\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Noodles\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Nonsense\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Nature/Nurture\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Noel\"",
              "id": "7",
              "children": []
            },
            {
              "name": "Non Sequiturs\"",
              "id": "8",
              "children": []
            },
            {
              "name": "Naked Truth\"",
              "id": "9",
              "children": []
            },
            {
              "name": "Night\"",
              "id": "10",
              "children": []
            },
            {
              "name": "Not Nearly\"",
              "id": "11",
              "children": []
            },
            {
              "name": "Noble Rot\"",
              "id": "12",
              "children": []
            },
            {
              "name": "Nosey Noisy\"",
              "id": "13",
              "children": []
            },
            {
              "name": "North Norse\"",
              "id": "14",
              "children": []
            },
            {
              "name": "Naming Names\"",
              "id": "15",
              "children": []
            }
          ]
        },
        {
          "name": "Season 13",
          "id": "3",
          "children": [
            {
              "name": "Misconceptions\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Messy\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Making a Meal of It\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Menagerie\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Merriment\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Monster Mash\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Medieval and Macabre\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Marriage and Mating\"",
              "id": "7",
              "children": []
            },
            {
              "name": "Messing with Your Mind\"",
              "id": "8",
              "children": []
            },
            {
              "name": "Maths\"",
              "id": "9",
              "children": []
            },
            {
              "name": "M-Places\"",
              "id": "10",
              "children": []
            },
            {
              "name": "Military Matters\"",
              "id": "11",
              "children": []
            }
          ]
        },
        {
          "name": "Season 12",
          "id": "4",
          "children": [
            {
              "name": "Episode 13\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Episode 5\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Episode 4\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Episode 14\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Episode 10\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Episode 9\"",
              "id": "5",
              "children": []
            },
            {
              "name": "Episode 8\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Episode 7\"",
              "id": "7",
              "children": []
            },
            {
              "name": "Episode 6\"",
              "id": "8",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Peep Show",
      "id": "23",
      "children": [
        {
          "name": "Series 1",
          "id": "0",
          "children": [
            {
              "name": "Warring Factions\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Series 2",
          "id": "1",
          "children": [
            {
              "name": "Dance Class\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Series 4",
          "id": "2",
          "children": [
            {
              "name": "Sophie's Parents\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "The Thick of It",
      "id": "24",
      "children": [
        {
          "name": "Series 1",
          "id": "0",
          "children": [
            {
              "name": "Episode 1\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Limitless\"",
      "id": "25",
      "children": []
    },
    {
      "name": "The Witcher",
      "id": "26",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "The End’s Beginning\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Much More\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Before a Fall\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Rare Species\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Bottled Appetites\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Of Banquets",
              "id": "5",
              "children": []
            },
            {
              "name": "Betrayer Moon\"",
              "id": "6",
              "children": []
            },
            {
              "name": "Four Marks\"",
              "id": "7",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Groundhog Day\"",
      "id": "27",
      "children": []
    },
    {
      "name": "Monty Python and the Holy Grail\"",
      "id": "28",
      "children": []
    },
    {
      "name": "Sully\"",
      "id": "29",
      "children": []
    },
    {
      "name": "Red vs. Blue",
      "id": "30",
      "children": [
        {
          "name": "Volume 2",
          "id": "0",
          "children": [
            {
              "name": "The Blood Gulch Chronicles",
              "id": "0",
              "children": [
                {
                  "name": "Vol. 2\"",
                  "id": "0",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "name": "Volume 1",
          "id": "1",
          "children": [
            {
              "name": "The Blood Gulch Chronicles",
              "id": "0",
              "children": [
                {
                  "name": "Vol. 1\"",
                  "id": "0",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Amy Schumer",
      "id": "31",
      "children": [
        {
          "name": "The Leather Special\"",
          "id": "0",
          "children": []
        }
      ]
    },
    {
      "name": "Kick-Ass 2\"",
      "id": "32",
      "children": []
    },
    {
      "name": "Kick-Ass\"",
      "id": "33",
      "children": []
    },
    {
      "name": "That Mitchell and Webb Look",
      "id": "34",
      "children": [
        {
          "name": "Series 1",
          "id": "0",
          "children": [
            {
              "name": "Episode 4\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Episode 3\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Episode 2\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Episode 1\"",
              "id": "3",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "The Lego Batman Movie\"",
      "id": "35",
      "children": []
    },
    {
      "name": "Shrek\"",
      "id": "36",
      "children": []
    },
    {
      "name": "RuPaul's Drag Race",
      "id": "37",
      "children": [
        {
          "name": "Season 11",
          "id": "0",
          "children": [
            {
              "name": "Whatcha Unpackin?\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Blade Runner 2049\"",
      "id": "38",
      "children": []
    },
    {
      "name": "Angels & Demons\"",
      "id": "39",
      "children": []
    },
    {
      "name": "The Fugitive\"",
      "id": "40",
      "children": []
    },
    {
      "name": "Dave Chappelle",
      "id": "41",
      "children": [
        {
          "name": "Sticks & Stones\"",
          "id": "0",
          "children": []
        }
      ]
    },
    {
      "name": "The Expendables\"",
      "id": "42",
      "children": []
    },
    {
      "name": "Shaun of the Dead\"",
      "id": "43",
      "children": []
    },
    {
      "name": "Kung Fu Panda 2\"",
      "id": "44",
      "children": []
    },
    {
      "name": "Kung Fu Panda\"",
      "id": "45",
      "children": []
    },
    {
      "name": "Blackadder",
      "id": "46",
      "children": [
        {
          "name": "Series 2",
          "id": "0",
          "children": [
            {
              "name": "Head\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Chains\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Beer\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Money\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Potato\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Bells\"",
              "id": "5",
              "children": []
            }
          ]
        },
        {
          "name": "Series 3",
          "id": "1",
          "children": [
            {
              "name": "Dish and Dishonesty\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Series 1",
          "id": "2",
          "children": [
            {
              "name": "The Black Seal\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Witchsmeller Pursuivant\"",
              "id": "1",
              "children": []
            },
            {
              "name": "The Queen of Spain's Beard\"",
              "id": "2",
              "children": []
            },
            {
              "name": "The Archbishop\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Born to Be King\"",
              "id": "4",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Transformers",
      "id": "47",
      "children": [
        {
          "name": "The Last Knight\"",
          "id": "0",
          "children": []
        }
      ]
    },
    {
      "name": "Spider-Man",
      "id": "48",
      "children": [
        {
          "name": "Homecoming\"",
          "id": "0",
          "children": []
        }
      ]
    },
    {
      "name": "Beyond Stranger Things",
      "id": "49",
      "children": [
        {
          "name": "Beyond 2",
          "id": "0",
          "children": [
            {
              "name": "Mind Blown\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Stranger Things",
      "id": "50",
      "children": [
        {
          "name": "Stranger Things 3",
          "id": "0",
          "children": [
            {
              "name": "Chapter Eight",
              "id": "0",
              "children": [
                {
                  "name": "The Battle of Starcourt\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter Seven",
              "id": "1",
              "children": [
                {
                  "name": "The Bite\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter Six",
              "id": "2",
              "children": [
                {
                  "name": "E Pluribus Unum\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter Five",
              "id": "3",
              "children": [
                {
                  "name": "The Flayed\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter Four",
              "id": "4",
              "children": [
                {
                  "name": "The Sauna Test\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter Three",
              "id": "5",
              "children": [
                {
                  "name": "The Case of the Missing Lifeguard\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter Two",
              "id": "6",
              "children": [
                {
                  "name": "The Mall Rats\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter One",
              "id": "7",
              "children": [
                {
                  "name": "Suzie",
                  "id": "0",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "name": "Stranger Things 2",
          "id": "1",
          "children": [
            {
              "name": "Chapter Nine",
              "id": "0",
              "children": [
                {
                  "name": "The Gate\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter Eight",
              "id": "1",
              "children": [
                {
                  "name": "The Mind Flayer\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter Seven",
              "id": "2",
              "children": [
                {
                  "name": "The Lost Sister\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter Six",
              "id": "3",
              "children": [
                {
                  "name": "The Spy\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter Five",
              "id": "4",
              "children": [
                {
                  "name": "Dig Dug\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter Four",
              "id": "5",
              "children": [
                {
                  "name": "Will the Wise\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter Three",
              "id": "6",
              "children": [
                {
                  "name": "The Pollywog\"",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter Two",
              "id": "7",
              "children": [
                {
                  "name": "Trick or Treat",
                  "id": "0",
                  "children": []
                }
              ]
            },
            {
              "name": "Chapter One",
              "id": "8",
              "children": [
                {
                  "name": "MADMAX\"",
                  "id": "0",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "name": "Chapter Eight",
          "id": "2",
          "children": [
            {
              "name": "The Upside Down\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Chapter Seven",
          "id": "3",
          "children": [
            {
              "name": "The Bathtub\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Chapter Six",
          "id": "4",
          "children": [
            {
              "name": "The Monster\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Chapter Five",
          "id": "5",
          "children": [
            {
              "name": "The Flea and the Acrobat\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Chapter Four",
          "id": "6",
          "children": [
            {
              "name": "The Body\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Chapter Three",
          "id": "7",
          "children": [
            {
              "name": "Holly",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Chapter Two",
          "id": "8",
          "children": [
            {
              "name": "The Weirdo on Maple Street\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Chapter One",
          "id": "9",
          "children": [
            {
              "name": "The Vanishing Of Will Byers\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "The IT Crowd",
      "id": "51",
      "children": [
        {
          "name": "Series 2",
          "id": "0",
          "children": [
            {
              "name": "The Work Outing\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Men Without Women\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Smoke and Mirrors\"",
              "id": "2",
              "children": []
            },
            {
              "name": "The Dinner Party\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Moss and the German\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Return of the Golden Child\"",
              "id": "5",
              "children": []
            }
          ]
        },
        {
          "name": "Series 4",
          "id": "1",
          "children": [
            {
              "name": "Jen the Fredo\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Reynholm vs Reynholm\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Bad Boys\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Italian for Beginners\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Something Happened\"",
              "id": "4",
              "children": []
            },
            {
              "name": "The Final Countdown\"",
              "id": "5",
              "children": []
            }
          ]
        },
        {
          "name": "Series 5",
          "id": "2",
          "children": [
            {
              "name": "The Final Episode\"",
              "id": "0",
              "children": []
            }
          ]
        },
        {
          "name": "Series 3",
          "id": "3",
          "children": [
            {
              "name": "Calendar Geeks\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Friendface\"",
              "id": "1",
              "children": []
            },
            {
              "name": "The Speech\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Tramps Like Us\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Are We Not Men?\"",
              "id": "4",
              "children": []
            },
            {
              "name": "From Hell\"",
              "id": "5",
              "children": []
            }
          ]
        },
        {
          "name": "Series 1",
          "id": "4",
          "children": [
            {
              "name": "Aunt Irma Visits\"",
              "id": "0",
              "children": []
            },
            {
              "name": "The Haunting of Bill Crouse\"",
              "id": "1",
              "children": []
            },
            {
              "name": "The Red Door\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Fifty-Fifty\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Calamity Jen\"",
              "id": "4",
              "children": []
            },
            {
              "name": "Yesterday's Jam\"",
              "id": "5",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Friday Night Dinner",
      "id": "52",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "The Sofabed\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": " ",
      "id": "53",
      "children": [
        {
          "name": "VideoEpisode\"",
          "id": "0",
          "children": [
            {
              "name": "VideoEpisode\"",
              "id": "0",
              "children": [
                {
                  "name": "VideoEpisode\"",
                  "id": "0",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Avengers",
      "id": "54",
      "children": [
        {
          "name": "Age of Ultron\"",
          "id": "0",
          "children": []
        }
      ]
    },
    {
      "name": "Outlaw King\"",
      "id": "55",
      "children": []
    },
    {
      "name": "Labyrinth\"",
      "id": "56",
      "children": []
    },
    {
      "name": "The World's End\"",
      "id": "57",
      "children": []
    },
    {
      "name": "Designated Survivor",
      "id": "58",
      "children": [
        {
          "name": "Season 2",
          "id": "0",
          "children": [
            {
              "name": "Sting of the Tail\"",
              "id": "0",
              "children": []
            },
            {
              "name": "One Year In\"",
              "id": "1",
              "children": []
            }
          ]
        },
        {
          "name": "Season 1",
          "id": "1",
          "children": [
            {
              "name": "Pilot\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Spartacus",
      "id": "59",
      "children": [
        {
          "name": "Blood and Sand",
          "id": "0",
          "children": [
            {
              "name": "The Red Serpent\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Pompeii\"",
      "id": "60",
      "children": []
    },
    {
      "name": "Top Gear",
      "id": "61",
      "children": [
        {
          "name": "Series 7",
          "id": "0",
          "children": [
            {
              "name": "Winter Olympics Special\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Centurion\"",
      "id": "62",
      "children": []
    },
    {
      "name": "Robin Hood\"",
      "id": "63",
      "children": []
    },
    {
      "name": "Archer",
      "id": "64",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "Pilot",
              "id": "0",
              "children": [
                {
                  "name": "Mole Hunt\"",
                  "id": "0",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "The Dragon Prince",
      "id": "65",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "Echoes of Thunder\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Jason Bourne\"",
      "id": "66",
      "children": []
    },
    {
      "name": "Roman Empire",
      "id": "67",
      "children": [
        {
          "name": "Julius Caesar",
          "id": "0",
          "children": [
            {
              "name": "Master of Rome",
              "id": "0",
              "children": [
                {
                  "name": "The Triumvirate\"",
                  "id": "0",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Hacksaw Ridge\"",
      "id": "68",
      "children": []
    },
    {
      "name": "The Hitman’s Bodyguard\"",
      "id": "69",
      "children": []
    },
    {
      "name": "Jimmy Carr",
      "id": "70",
      "children": [
        {
          "name": "Funny Business\"",
          "id": "0",
          "children": []
        }
      ]
    },
    {
      "name": "Mr. Bean",
      "id": "71",
      "children": [
        {
          "name": "Mr Bean Live Action",
          "id": "0",
          "children": [
            {
              "name": "Season 1",
              "id": "0",
              "children": [
                {
                  "name": "The Return of Mr. Bean\"",
                  "id": "0",
                  "children": []
                },
                {
                  "name": "Mr. Bean\"",
                  "id": "1",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Mad Max",
      "id": "72",
      "children": [
        {
          "name": "Fury Road\"",
          "id": "0",
          "children": []
        }
      ]
    },
    {
      "name": "The Great British Bake Off",
      "id": "73",
      "children": [
        {
          "name": "Season 7",
          "id": "0",
          "children": [
            {
              "name": "Cake Week\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Deadpool\"",
      "id": "74",
      "children": []
    },
    {
      "name": "Peaky Blinders",
      "id": "75",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "Episode 1\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Thor",
      "id": "76",
      "children": [
        {
          "name": "The Dark World\"",
          "id": "0",
          "children": []
        }
      ]
    },
    {
      "name": "Avengers Assemble\"",
      "id": "77",
      "children": []
    },
    {
      "name": "F is for Family",
      "id": "78",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "The Bleedin’ in Sweden\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Russell Howard",
      "id": "79",
      "children": [
        {
          "name": "Recalibrate\"",
          "id": "0",
          "children": []
        }
      ]
    },
    {
      "name": "The Foreigner\"",
      "id": "80",
      "children": []
    },
    {
      "name": "Dark",
      "id": "81",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "Secrets\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Star Wars",
      "id": "82",
      "children": [
        {
          "name": "Episode VII",
          "id": "0",
          "children": [
            {
              "name": "The Force Awakens\"",
              "id": "0",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "John Wick\"",
      "id": "83",
      "children": []
    },
    {
      "name": "The Wrong Mans",
      "id": "84",
      "children": [
        {
          "name": "Season 2",
          "id": "0",
          "children": [
            {
              "name": "Wise Mans\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Action Mans\"",
              "id": "1",
              "children": []
            },
            {
              "name": "A Few Good Mans\"",
              "id": "2",
              "children": []
            },
            {
              "name": "X-Mans\"",
              "id": "3",
              "children": []
            }
          ]
        },
        {
          "name": "Season 1",
          "id": "1",
          "children": [
            {
              "name": "Running Mans\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Wanted Mans\"",
              "id": "1",
              "children": []
            },
            {
              "name": "Inside Mans\"",
              "id": "2",
              "children": []
            },
            {
              "name": "Dead Mans\"",
              "id": "3",
              "children": []
            },
            {
              "name": "Bad Mans\"",
              "id": "4",
              "children": []
            },
            {
              "name": "The Wrong Mans\"",
              "id": "5",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "White House Down\"",
      "id": "85",
      "children": []
    },
    {
      "name": "Breaking Bad",
      "id": "86",
      "children": [
        {
          "name": "Season 1",
          "id": "0",
          "children": [
            {
              "name": "The Cat's in the Bag\"",
              "id": "0",
              "children": []
            },
            {
              "name": "Pilot\"",
              "id": "1",
              "children": []
            }
          ]
        }
      ]
    }
  ]
}



function fileChanged(file){
  console.log("File Changed")
  readFile(file).then((contents, err) => {
    const netflixData = extractNetflixData2(contents);
    treeData.children = netflixData;
    console.log(treeData);
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflix History Grapher</h1>
        <input type="file" accept=".csv" onChange={(e) => fileChanged(e.target.files[0])}/>
      </header>
      <ul id="myUL">
        <DropdownSelector data={treeData} title="Test" children={[{title:"Test2", children:[]}]} />
      </ul>
    </div>
  );
}

export default App;
