export const QUIZ_DATA = {
  "blocks": [
    {
      "id": "c1c2",
      "title": "Matter & Atomic Structure",
      "questions": [
        {
          "id": "q1",
          "prompt": "You have a mixture of sand and salt. Which method separates them completely?",
          "correctFeedback": "Exactly right — salt dissolves in water and sand doesn't, so three simple physical steps separate them.",
          "options": [
            {
              "text": "Dissolve the salt in water, filter out the sand, then evaporate the water so the salt crystals are left behind",
              "correct": true
            },
            {
              "text": "Use a magnet to pull the salt particles out of the mixture, since salt is slightly magnetic",
              "correct": false,
              "feedback": "Salt isn't magnetic at all.",
              "video": {
                "id": "c1_q1_magnet",
                "script": "Table salt, sodium chloride, is not magnetic. Magnets only attract a small group of materials — mainly iron, nickel, and cobalt — because of how electrons behave inside their atoms. Sodium and chloride ions don't have that property, so a magnet has no effect on salt whatsoever. Magnetic separation is only useful when part of a mixture actually contains a magnetic metal, for example iron filings mixed with sand. For a sand and salt mixture, the correct approach uses solubility instead: add water so the salt dissolves, filter out the sand, then evaporate the water to recover the pure salt crystals."
              }
            },
            {
              "text": "Heat the whole mixture strongly until the sand melts and can be poured off separately from the salt",
              "correct": false,
              "feedback": "Sand doesn't melt at any temperature you'd use in a school lab.",
              "video": {
                "id": "c1_q1_melt",
                "script": "Sand is mostly silicon dioxide, and its melting point is around one thousand seven hundred degrees Celsius — far higher than any Bunsen burner or school lab furnace can reach. Heating the mixture that strongly would be both impractical and dangerous, and it still wouldn't cleanly separate the two solids from each other. The reliable method uses solubility instead: salt dissolves in water while sand does not, so you dissolve the salt, filter out the solid sand, and then evaporate the water to recover the salt crystals separately."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "c3c4",
      "title": "Chemical Bonding & Amount of Substance",
      "questions": [
        {
          "id": "q2",
          "prompt": "What type of bonding holds a crystal of table salt (NaCl) together?",
          "correctFeedback": "Correct — NaCl is a classic ionic compound: a metal and a non-metal forming oppositely charged ions.",
          "options": [
            {
              "text": "Ionic bonding, caused by the electrostatic attraction between Na⁺ and Cl⁻ ions arranged in a lattice",
              "correct": true
            },
            {
              "text": "Covalent bonding, where sodium and chlorine atoms share a pair of electrons between them",
              "correct": false,
              "feedback": "In NaCl, the electron is transferred, not shared.",
              "video": {
                "id": "c3_q4_covalent",
                "script": "Covalent bonds form when two atoms share a pair of electrons, and this usually happens between two non-metals with similar electronegativity, such as in water or carbon dioxide. Sodium and chlorine are very different: sodium is a metal that loses electrons easily, and chlorine is a non-metal that gains electrons easily. Because of this large difference, sodium doesn't share its outer electron with chlorine — it transfers it completely. Sodium becomes a positive ion, Na plus, and chlorine becomes a negative ion, Cl minus. The strong attraction between these oppositely charged ions, arranged in a repeating lattice, is called ionic bonding, not covalent bonding."
              }
            },
            {
              "text": "Metallic bonding, where free-moving electrons are shared across a lattice of sodium atoms",
              "correct": false,
              "feedback": "Metallic bonding only happens between metal atoms, and NaCl also contains chlorine.",
              "video": {
                "id": "c3_q4_metallic",
                "script": "Metallic bonding occurs inside pure metals or metal alloys, where atoms release some of their outer electrons into a shared 'sea' of delocalised electrons that moves freely between positively charged metal ions. That's what gives metals their conductivity and malleability. But table salt isn't a pure metal — it's a compound made of a metal, sodium, and a non-metal, chlorine. Chlorine atoms don't join a delocalised electron sea; instead, they pull a whole electron away from sodium to become negative chloride ions. The resulting structure is held together by the attraction between Na plus and Cl minus ions — ionic bonding, not metallic bonding."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "c5c6",
      "title": "Chemical Reactions & Intermolecular Forces",
      "questions": [
        {
          "id": "q3",
          "prompt": "What does a catalyst do in a chemical reaction?",
          "correctFeedback": "Correct — a catalyst makes the reaction easier to start and comes out of it unchanged.",
          "options": [
            {
              "text": "It lowers the activation energy needed to start the reaction, without being permanently consumed itself",
              "correct": true
            },
            {
              "text": "It gets used up completely during the reaction and must be replaced for the next batch",
              "correct": false,
              "feedback": "A catalyst is regenerated, not consumed.",
              "video": {
                "id": "c5_q7_usedup",
                "script": "It's a common mix-up, but a catalyst is not a reactant. During the reaction, a catalyst does take part in the mechanism — it might briefly bond with a reactant or form an intermediate — but by the end of the reaction, it's released again in its original form. That's exactly why a small amount of catalyst can keep speeding up the same reaction over and over, without running out. What a catalyst actually does is lower the activation energy, the minimum energy needed to start the reaction, so it happens faster or at a lower temperature, while the catalyst itself stays chemically unchanged overall."
              }
            },
            {
              "text": "It increases the total amount of product that the reaction can eventually form overall",
              "correct": false,
              "feedback": "A catalyst changes the speed, not the final amount.",
              "video": {
                "id": "c5_q7_yield",
                "script": "A catalyst speeds up how quickly a reaction reaches its result, but it does not change how much product the reaction can eventually form. Whether a catalyst is present or not, a reaction under the same starting conditions ends up producing the same total amount of product — the catalyst just gets it there faster, by lowering the activation energy needed to start. Think of it like a shortcut on a hike: taking the shortcut gets you to the same destination sooner, but it doesn't change where the destination is. Catalysts affect reaction rate, not the final yield of a reaction."
              }
            }
          ]
        },
        {
          "id": "q4",
          "prompt": "In a balanced chemical equation, what must be equal on both sides?",
          "correctFeedback": "Correct — atoms are conserved, so their number must match on both sides.",
          "options": [
            {
              "text": "The number of atoms of each element, since atoms are never created or destroyed in a reaction",
              "correct": true
            },
            {
              "text": "The number of separate molecules listed among the reactants and among the products",
              "correct": false,
              "feedback": "Molecule counts can differ; it's atoms that must balance.",
              "video": {
                "id": "c5_q9_molecules",
                "script": "It's easy to assume balancing an equation means the number of molecules has to match on each side, but that's not the rule. A reaction can turn one molecule of methane and two of oxygen into one molecule of carbon dioxide and two of water — four molecules on the left, three on the right, and that's still correctly balanced. What has to match is the number of atoms of each element: four hydrogen, four oxygen, and one carbon atom on both sides. We adjust the coefficients in front of formulas until every element's atom count is equal — never by changing the formulas themselves."
              }
            },
            {
              "text": "The physical states of the substances, so solids must always react to form solids again",
              "correct": false,
              "feedback": "Physical states can change; that's not what balancing means.",
              "video": {
                "id": "c5_q9_states",
                "script": "Balancing a chemical equation has nothing to do with keeping the physical states the same. A solid reactant can easily turn into a gas or a dissolved product — for example, solid calcium carbonate reacting with a liquid acid to produce a gas, carbon dioxide, and a salt dissolved in water. The state labels, (s), (l), (g), or (aq), just describe what each substance looks like; they don't constrain the reaction. What genuinely has to balance, because atoms are never created or destroyed, is the number of atoms of each element on the reactant side compared with the product side."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "c7",
      "title": "Acids and Bases",
      "questions": [
        {
          "id": "q5",
          "prompt": "What does the pH value of a solution tell you?",
          "correctFeedback": "Correct — pH reflects the concentration of oxonium ions, H₃O⁺, in the solution.",
          "options": [
            {
              "text": "How acidic or basic the solution is, based on the concentration of oxonium ions dissolved in it",
              "correct": true
            },
            {
              "text": "The exact temperature of the solution at the moment it was measured with a thermometer",
              "correct": false,
              "feedback": "pH and temperature are two completely different measurements.",
              "video": {
                "id": "c7_q10_temperature",
                "script": "pH and temperature measure two completely different things. Temperature tells you how much thermal energy the particles in a solution have, measured with a thermometer in degrees Celsius. pH tells you how acidic or basic a solution is, based specifically on the concentration of oxonium ions, H3O plus, dissolved in it, measured with a pH meter or an indicator. A solution can be hot or cold at almost any pH value — the two properties don't determine each other directly. So remember: pH is about acidity, not about how warm or cold a solution feels."
              }
            },
            {
              "text": "How much salt has dissolved in the solution compared to the total volume of water used",
              "correct": false,
              "feedback": "A dissolved salt doesn't automatically make a solution acidic or basic.",
              "video": {
                "id": "c7_q10_salt",
                "script": "Dissolving a salt in water changes the concentration of that salt, but it doesn't automatically tell you the solution's pH. Take ordinary table salt: dissolving it in water gives a neutral solution, pH about seven, no matter how much you dissolve, because sodium and chloride ions don't react significantly with water to produce extra oxonium or hydroxide ions. pH specifically measures the concentration of oxonium ions, H3O plus, which mainly come from acids reacting with water, not from just any dissolved substance. So a high or low salt concentration is not the same thing as a high or low pH."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "c8",
      "title": "Redox Reactions",
      "questions": [
        {
          "id": "q6",
          "prompt": "What happens to a substance during oxidation?",
          "correctFeedback": "Correct — oxidation always means losing electrons. Remember: OIL RIG — Oxidation Is Loss.",
          "options": [
            {
              "text": "It loses one or more electrons, which are then taken up by another substance nearby",
              "correct": true
            },
            {
              "text": "It gains one or more electrons, becoming more negatively charged than before",
              "correct": false,
              "feedback": "That describes reduction, the opposite process.",
              "video": {
                "id": "c8_q13_gain",
                "script": "This is one of the easiest mix-ups in redox chemistry, so it's worth being precise. Gaining electrons is called reduction, not oxidation — the two are opposites. A helpful memory trick is 'OIL RIG': Oxidation Is Loss, Reduction Is Gain, both referring to electrons. When a substance is oxidized, it loses one or more electrons and becomes more positively charged than before. Those lost electrons don't just disappear — they're picked up by another substance in the same reaction, which is reduced in the process. Oxidation and reduction always happen together, as a pair, in every redox reaction."
              }
            },
            {
              "text": "It loses protons to the surrounding solution while keeping all of its electrons",
              "correct": false,
              "feedback": "Oxidation is about electrons moving, not protons.",
              "video": {
                "id": "c8_q13_protons",
                "script": "It's easy to confuse this with acid-base chemistry, but oxidation and reduction are specifically about electrons, not protons. Reactions where protons, H plus ions, are transferred are called acid-base reactions, or protolysis — a completely different category. Oxidation is defined as the loss of one or more electrons by an atom, ion, or molecule. When a zinc atom reacts to form a zinc ion, Zn two plus, it has lost two electrons, not two protons — that's what makes it an oxidation, not an acid-base reaction. Keeping electron transfer and proton transfer separate is one of the most useful distinctions in this topic."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "c9",
      "title": "Organic Chemistry",
      "questions": [
        {
          "id": "q7",
          "prompt": "Why are there far more organic compounds than inorganic ones?",
          "correctFeedback": "Correct — carbon's four bonds and its ability to form chains explain the huge variety.",
          "options": [
            {
              "text": "Carbon can form four strong bonds and link into long chains, branches, and rings almost without limit",
              "correct": true
            },
            {
              "text": "Carbon happens to be the single most common element found across the surface of the Earth",
              "correct": false,
              "feedback": "Carbon isn't even among the most abundant elements in the Earth's crust.",
              "video": {
                "id": "c9_q18_abundance",
                "script": "It's a natural guess, but carbon is actually not one of the most abundant elements on Earth. By mass, the Earth's crust is dominated by oxygen and silicon, with carbon making up only a small fraction. So the huge number of organic compounds has nothing to do with carbon being especially common. It comes down to carbon's unique bonding ability: every carbon atom can form four strong covalent bonds, and carbon atoms can link into long chains, branched structures, and rings, almost without limit. Combined with different functional groups attaching along these structures, this creates enormous molecular variety — regardless of how much carbon exists on Earth."
              }
            },
            {
              "text": "Organic compounds are defined as any compound that contains only hydrogen and oxygen atoms",
              "correct": false,
              "feedback": "That's not what makes a compound organic.",
              "video": {
                "id": "c9_q18_definition",
                "script": "Organic compounds aren't defined by containing just hydrogen and oxygen — that would exclude almost every real organic molecule. Organic chemistry is the chemistry of carbon compounds: a compound is organic if its molecules are built around a chain or ring of carbon atoms, almost always bonded to hydrogen, and often to other elements too, like oxygen, nitrogen, sulfur, or halogens. Carbon dioxide and carbonates, by contrast, contain carbon but are usually treated as inorganic. What actually explains the huge number of organic compounds is carbon's ability to form four bonds and link into chains, branches, and rings — not a narrow definition based on two elements."
              }
            }
          ]
        }
      ]
    }
  ]
};