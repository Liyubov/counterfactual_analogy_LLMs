var all_problems = {
  "alph_0": {
    "shuffled_letters": [
      "n",
      "b",
      "q",
      "u",
      "o"
    ],
    "shuffled_alphabet": [
      "a",
      "n",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "b",
      "q",
      "p",
      "u",
      "r",
      "s",
      "t",
      "o",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    "succ": [
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[k l m b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j k l m] &nbsp [j k l b]<br>[p u r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m b q p] &nbsp [m b q u]<br>[k l m b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k l m b] &nbsp [k l m q]<br>[a n c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p u r s] &nbsp [p u r t]<br>[t o v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q p u r] &nbsp [q p u s]<br>[r s t o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k l m b] &nbsp [k l m q]<br>[q p u r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[g h i j] &nbsp [g h i k]<br>[a n c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p u r s] &nbsp [p u r t]<br>[u r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q p u r] &nbsp [q p u s]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[m b q p] &nbsp [l b q p]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p u r s] &nbsp [q u r s]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q p u r] &nbsp [b p u r]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m b q p] &nbsp [l b q p]<br>[s t o v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l m b q] &nbsp [k m b q]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m b q p] &nbsp [l b q p]<br>[p u r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v w x y] &nbsp [o w x y]<br>[p u r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b q p u] &nbsp [m q p u]<br>[q p u r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b q p u] &nbsp [m q p u]<br>[s t o v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u r s t] &nbsp [p r s t]<br>[q p u r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[u r s t] &nbsp [u r s t o]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u r s t] &nbsp [u r s t o]<br>[t o v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j k]<br>[b q p u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t o v w] &nbsp [t o v w x]<br>[a n c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l m b q] &nbsp [l m b q p]<br>[u r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t o v w] &nbsp [t o v w x]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b q p u] &nbsp [b q p u r]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l m b q] &nbsp [l m b q p]<br>[a n c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p u r s] &nbsp [p u r s t]<br>[q p u r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b q p u] &nbsp [b q p u r]<br>[a n c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[j j k l m b] &nbsp [j k l m b]<br>[g h i i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k l m m b q] &nbsp [k l m b q]<br>[b b q p u r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a n c d e e] &nbsp [a n c d e]<br>[n c c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[u r r s t o] &nbsp [u r s t o]<br>[v w x y y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h i j j k l] &nbsp [h i j k l]<br>[a n c c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q p u r s s] &nbsp [q p u r s]<br>[r s t t o v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a a n c d e] &nbsp [a n c d e]<br>[q p u u r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t o v w w x] &nbsp [t o v w x]<br>[k l m b q q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f g g h i j] &nbsp [f g h i j]<br>[a a n c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a a n c d e] &nbsp [a n c d e]<br>[c d d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[q p u r o] &nbsp [q p u r s]<br>[j k l m c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[y g h i j] &nbsp [f g h i j]<br>[p u r v t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b n p u r] &nbsp [b q p u r]<br>[e f r h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e z g h i] &nbsp [e f g h i]<br>[q p n r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[u r s k o] &nbsp [u r s t o]<br>[l h b q p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e b g h i] &nbsp [e f g h i]<br>[o a w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s t i v w] &nbsp [s t o v w]<br>[d q f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a q p u r] &nbsp [b q p u r]<br>[o v j x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p u r w t] &nbsp [p u r s t]<br>[a n c d p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[e f g y i] &nbsp [e f g h i]<br>[a o v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[e c d n f] &nbsp [n c d e f]<br>[u b q p m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g e f d h] &nbsp [d e f g h]<br>[m q b p u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a c n d e] &nbsp [a n c d e]<br>[q p s r u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r u p s t] &nbsp [p u r s t]<br>[i j l k m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f c d e n] &nbsp [n c d e f]<br>[h e f g d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b u p q r] &nbsp [b q p u r]<br>[w o v t x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o v y x w] &nbsp [o v w x y]<br>[u t s r o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n c f e d] &nbsp [n c d e f]<br>[a n d c e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b q p r u] &nbsp [b q p u r]<br>[s t w v o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m q b p u] &nbsp [m b q p u]<br>[b u p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[u r s t] &nbsp [u r s o]<br>[b q p u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k l m b] &nbsp [k l m q]<br>[b q p u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[b q p u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a n c d] &nbsp [a n c e]<br>[p u r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q p u r] &nbsp [q p u s]<br>[n c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m b q p] &nbsp [m b q u]<br>[a n c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a n c d] &nbsp [a n c e]<br>[s t o v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u r s t] &nbsp [u r s o]<br>[k l m b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a n c d] &nbsp [a n c e]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p u r s] &nbsp [p u r t]<br>[r s t o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_1": {
    "shuffled_letters": [
      "o",
      "r",
      "l",
      "x",
      "e"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "c",
      "d",
      "o",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "r",
      "m",
      "n",
      "l",
      "p",
      "q",
      "x",
      "s",
      "t",
      "u",
      "v",
      "w",
      "e",
      "y",
      "z"
    ],
    "succ": [
      {
        "prompt": "[d o f g] &nbsp [d o f h]<br>[q x s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k r m n] &nbsp [k r m l]<br>[c d o f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[n l p q] &nbsp [n l p x]<br>[q x s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j k r m] &nbsp [j k r n]<br>[b c d o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[j k r m] &nbsp [j k r n]<br>[c d o f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t u v w] &nbsp [t u v e]<br>[v w e y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h i j k] &nbsp [h i j r]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h i j k] &nbsp [h i j r]<br>[p q x s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b c d o] &nbsp [b c d f]<br>[v w e y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b c d o] &nbsp [b c d f]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[p q x s] &nbsp [l q x s]<br>[d o f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u v w e] &nbsp [t v w e]<br>[x s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b c d o] &nbsp [a c d o]<br>[v w e y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[w e y z] &nbsp [v e y z]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i j k r] &nbsp [h j k r]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t u v w] &nbsp [s u v w]<br>[x s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f g h i] &nbsp [o g h i]<br>[l p q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r m n l] &nbsp [k m n l]<br>[q x s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m n l p] &nbsp [r n l p]<br>[k r m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m n l p] &nbsp [r n l p]<br>[b c d o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[a b c d] &nbsp [a b c d o]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o f g h] &nbsp [o f g h i]<br>[m n l p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[i j k r] &nbsp [i j k r m]<br>[l p q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j k r m] &nbsp [j k r m n]<br>[l p q x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l p q x] &nbsp [l p q x s]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k r m n] &nbsp [k r m n l]<br>[o f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[d o f g] &nbsp [d o f g h]<br>[p q x s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j k]<br>[i j k r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[i j k r] &nbsp [i j k r m]<br>[m n l p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b c d o] &nbsp [b c d o f]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[q q x s t u] &nbsp [q x s t u]<br>[s t u v v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[x s s t u v] &nbsp [x s t u v]<br>[u v w e e y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a b c d d o] &nbsp [a b c d o]<br>[j k r m n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m n l p q q] &nbsp [m n l p q]<br>[o f g h i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k r m n l l] &nbsp [k r m n l]<br>[x s t t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j k k r m n] &nbsp [j k r m n]<br>[k k r m n l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[i j k r m m] &nbsp [i j k r m]<br>[v w e y y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[x s t u u v] &nbsp [x s t u v]<br>[r r m n l p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p q q x s t] &nbsp [p q x s t]<br>[k r m n l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i j k r r m] &nbsp [i j k r m]<br>[r m n n l p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[e i j k r] &nbsp [h i j k r]<br>[a b c z o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f s t u v] &nbsp [x s t u v]<br>[r m k l p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[d o b g h] &nbsp [d o f g h]<br>[r m i l p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l p q x f] &nbsp [l p q x s]<br>[m v l p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[z t u v w] &nbsp [s t u v w]<br>[v x s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p q x m t] &nbsp [p q x s t]<br>[m n b p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k y m n l] &nbsp [k r m n l]<br>[v w p y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q x s t e] &nbsp [q x s t u]<br>[d o f g r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a w e y z] &nbsp [v w e y z]<br>[p g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l p q z s] &nbsp [l p q x s]<br>[p q x m t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[o f i h g] &nbsp [o f g h i]<br>[v u w e y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h o f g d] &nbsp [d o f g h]<br>[y v w e u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[y v w e u] &nbsp [u v w e y]<br>[k m r n l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k j i r m] &nbsp [i j k r m]<br>[l x q p s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[x s t v u] &nbsp [x s t u v]<br>[h j i k r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[s p q x l] &nbsp [l p q x s]<br>[h g f i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k m r n l] &nbsp [k r m n l]<br>[d f o g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t x s q u] &nbsp [q x s t u]<br>[b f d o c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[t s x u v] &nbsp [x s t u v]<br>[m q l p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[s t w v u] &nbsp [s t u v w]<br>[m r n l p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[n l p q] &nbsp [n l p x]<br>[i j k r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[c d o f] &nbsp [c d o g]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k r m n] &nbsp [k r m l]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v w e y] &nbsp [v w e z]<br>[d o f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q x s t] &nbsp [q x s u]<br>[k r m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k r m n] &nbsp [k r m l]<br>[u v w e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[v w e y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a b c d] &nbsp [a b c o]<br>[j k r m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k r m n] &nbsp [k r m l]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_2": {
    "shuffled_letters": [
      "q",
      "o",
      "a",
      "h",
      "m"
    ],
    "shuffled_alphabet": [
      "q",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "o",
      "i",
      "j",
      "k",
      "l",
      "a",
      "n",
      "h",
      "p",
      "m",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    "succ": [
      {
        "prompt": "[g o i j] &nbsp [g o i k]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a n h p] &nbsp [a n h m]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[i j k l] &nbsp [i j k a]<br>[h p m r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l a n h] &nbsp [l a n p]<br>[p m r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a n h p] &nbsp [a n h m]<br>[n h p m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i j k l] &nbsp [i j k a]<br>[j k l a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o i j k] &nbsp [o i j l]<br>[h p m r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m r s t] &nbsp [m r s u]<br>[j k l a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[a n h p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i j k l] &nbsp [i j k a]<br>[f g o i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[i j k l] &nbsp [o j k l]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l a n h] &nbsp [k a n h]<br>[p m r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a n h p] &nbsp [l n h p]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h p m r] &nbsp [n p m r]<br>[l a n h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k l a n] &nbsp [j l a n]<br>[g o i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[g o i j] &nbsp [f o i j]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h p m r] &nbsp [n p m r]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i j k l] &nbsp [o j k l]<br>[o i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e f g o] &nbsp [d f g o]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g o i j] &nbsp [f o i j]<br>[h p m r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[a n h p] &nbsp [a n h p m]<br>[g o i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l a n h] &nbsp [l a n h p]<br>[q b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[f g o i] &nbsp [f g o i j]<br>[l a n h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c d e f] &nbsp [c d e f g]<br>[e f g o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h p m r] &nbsp [h p m r s]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f g o i] &nbsp [f g o i j]<br>[p m r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b c d e] &nbsp [b c d e f]<br>[n h p m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q b c d] &nbsp [q b c d e]<br>[m r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l a n h] &nbsp [l a n h p]<br>[n h p m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a n h p] &nbsp [a n h p m]<br>[q b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[n h p p m r] &nbsp [n h p m r]<br>[h p m m r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e f g g o i] &nbsp [e f g o i]<br>[h p p m r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b c d e f f] &nbsp [b c d e f]<br>[q b c d e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q q b c d e] &nbsp [q b c d e]<br>[k l a a n h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q q b c d e] &nbsp [q b c d e]<br>[c d d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e f g o o i] &nbsp [e f g o i]<br>[k k l a n h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a a n h p m] &nbsp [a n h p m]<br>[s t u u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k l a n h h] &nbsp [k l a n h]<br>[o i j k k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p m r r s t] &nbsp [p m r s t]<br>[n h h p m r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m r s s t u] &nbsp [m r s t u]<br>[q b c d d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[n h p w r] &nbsp [n h p m r]<br>[d e q g o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[x h p m r] &nbsp [n h p m r]<br>[s i u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a n j p m] &nbsp [a n h p m]<br>[n h p c r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[u z w x y] &nbsp [u v w x y]<br>[j k z a n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m r q t u] &nbsp [m r s t u]<br>[a n w p m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q s c d e] &nbsp [q b c d e]<br>[a n h p z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[i j m l a] &nbsp [i j k l a]<br>[c i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p m r l t] &nbsp [p m r s t]<br>[o f j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o i j k q] &nbsp [o i j k l]<br>[m s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l a n q p] &nbsp [l a n h p]<br>[m r s n u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[m h p n r] &nbsp [n h p m r]<br>[t u v x w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e b c d q] &nbsp [q b c d e]<br>[m t s r u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[c b d e f] &nbsp [b c d e f]<br>[q b e d c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k l a h n] &nbsp [k l a n h]<br>[o g f i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[u t v w x] &nbsp [t u v w x]<br>[c b q d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d o f g e] &nbsp [d e f g o]<br>[b d c e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r m s t u] &nbsp [m r s t u]<br>[q b d c e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l i j k o] &nbsp [o i j k l]<br>[p t r s m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p h m r s] &nbsp [h p m r s]<br>[j n l a k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i o j k l] &nbsp [o i j k l]<br>[g f o i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[d e f g] &nbsp [d e f o]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q b c d] &nbsp [q b c e]<br>[h p m r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h p m r] &nbsp [h p m s]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q b c d] &nbsp [q b c e]<br>[n h p m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l a n h] &nbsp [l a n p]<br>[p m r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o i j k] &nbsp [o i j l]<br>[m r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[g o i j] &nbsp [g o i k]<br>[e f g o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q b c d] &nbsp [q b c e]<br>[r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[i j k l] &nbsp [i j k a]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q b c d] &nbsp [q b c e]<br>[f g o i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_3": {
    "shuffled_letters": [
      "g",
      "q",
      "z",
      "n",
      "b"
    ],
    "shuffled_alphabet": [
      "a",
      "g",
      "c",
      "d",
      "e",
      "f",
      "q",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "z",
      "o",
      "p",
      "n",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "b"
    ],
    "succ": [
      {
        "prompt": "[m z o p] &nbsp [m z o n]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[a g c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[z o p n] &nbsp [z o p r]<br>[d e f q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m z o p] &nbsp [m z o n]<br>[g c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n r s t] &nbsp [n r s u]<br>[z o p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p n r s] &nbsp [p n r t]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j k l m] &nbsp [j k l z]<br>[p n r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j k l m] &nbsp [j k l z]<br>[a g c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f q h i] &nbsp [f q h j]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[g c d e] &nbsp [a c d e]<br>[d e f q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[v w x y] &nbsp [u w x y]<br>[z o p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g c d e] &nbsp [a c d e]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d e f q] &nbsp [c e f q]<br>[g c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g c d e] &nbsp [a c d e]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h i j k] &nbsp [q i j k]<br>[o p n r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h i j k] &nbsp [q i j k]<br>[e f q h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t u v w] &nbsp [s u v w]<br>[o p n r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h i j k] &nbsp [q i j k]<br>[d e f q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q h i j] &nbsp [f h i j]<br>[z o p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[l m z o] &nbsp [l m z o p]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e f q h] &nbsp [e f q h i]<br>[f q h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g c d e] &nbsp [g c d e f]<br>[d e f q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m z o p] &nbsp [m z o p n]<br>[e f q h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l m z o] &nbsp [l m z o p]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m z o p] &nbsp [m z o p n]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n r s t] &nbsp [n r s t u]<br>[g c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t u v w] &nbsp [t u v w x]<br>[a g c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[u v w x] &nbsp [u v w x y]<br>[a g c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p n r s] &nbsp [p n r s t]<br>[m z o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[o p n r r s] &nbsp [o p n r s]<br>[e f q h i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[z o p p n r] &nbsp [z o p n r]<br>[f f q h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[z o p n r r] &nbsp [z o p n r]<br>[p n r r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[s s t u v w] &nbsp [s t u v w]<br>[p n r s t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e e f q h i] &nbsp [e f q h i]<br>[d d e f q h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n r s t u u] &nbsp [n r s t u]<br>[z o p n n r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c c d e f q] &nbsp [c d e f q]<br>[u v w x x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[c d e f f q] &nbsp [c d e f q]<br>[l m m z o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[z z o p n r] &nbsp [z o p n r]<br>[v w x y y b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[e f q h i i] &nbsp [e f q h i]<br>[v v w x y b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[l m z o h] &nbsp [l m z o p]<br>[y t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[x p n r s] &nbsp [o p n r s]<br>[e w x y b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[w q h i j] &nbsp [f q h i j]<br>[q h i y k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[s t m v w] &nbsp [s t u v w]<br>[v w a y b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m z o s n] &nbsp [m z o p n]<br>[u f q h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m z o p v] &nbsp [m z o p n]<br>[c d e r q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h n j k l] &nbsp [h i j k l]<br>[x z o p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l p n r s] &nbsp [o p n r s]<br>[s g c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e f r h i] &nbsp [e f q h i]<br>[y h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[j y l m z] &nbsp [j k l m z]<br>[g c d o f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[z r p n o] &nbsp [z o p n r]<br>[i l k j m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l i j k h] &nbsp [h i j k l]<br>[m z n p o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[n r u t s] &nbsp [n r s t u]<br>[e d f q h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[z o r n p] &nbsp [z o p n r]<br>[v w b y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[t x v w u] &nbsp [t u v w x]<br>[a g e d c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e g c d a] &nbsp [a g c d e]<br>[f i h q j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l m o z p] &nbsp [l m z o p]<br>[q e f d h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p z o m n] &nbsp [m z o p n]<br>[i h q j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f q i h j] &nbsp [f q h i j]<br>[s n r p t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n s r t u] &nbsp [n r s t u]<br>[m j k l i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[g c d e] &nbsp [g c d f]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m z o p] &nbsp [m z o n]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e f q h] &nbsp [e f q i]<br>[g c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v w x y] &nbsp [v w x b]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m z o p] &nbsp [m z o n]<br>[a g c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a g c d] &nbsp [a g c e]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m z o p] &nbsp [m z o n]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l m z o] &nbsp [l m z p]<br>[m z o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q h i j] &nbsp [q h i k]<br>[m z o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_4": {
    "shuffled_letters": [
      "f",
      "k",
      "r",
      "e",
      "p"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "c",
      "d",
      "f",
      "k",
      "g",
      "h",
      "i",
      "j",
      "r",
      "l",
      "m",
      "n",
      "o",
      "e",
      "q",
      "p",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    "succ": [
      {
        "prompt": "[o e q p] &nbsp [o e q s]<br>[f k g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l m n o] &nbsp [l m n e]<br>[f k g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j r l m] &nbsp [j r l n]<br>[e q p s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j r l m] &nbsp [j r l n]<br>[n o e q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q p s t] &nbsp [q p s u]<br>[d f k g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h i j r] &nbsp [h i j l]<br>[e q p s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[b c d f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e q p s] &nbsp [e q p t]<br>[h i j r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[t u v w] &nbsp [t u v x]<br>[n o e q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q p s t] &nbsp [q p s u]<br>[m n o e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[o e q p] &nbsp [n e q p]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h i j r] &nbsp [g i j r]<br>[f k g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k g h i] &nbsp [f g h i]<br>[m n o e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[s t u v] &nbsp [p t u v]<br>[d f k g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[u v w x] &nbsp [t v w x]<br>[f k g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o e q p] &nbsp [n e q p]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h i j r] &nbsp [g i j r]<br>[p s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n o e q] &nbsp [m o e q]<br>[q p s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s t u v] &nbsp [p t u v]<br>[b c d f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[s t u v] &nbsp [p t u v]<br>[p s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[r l m n] &nbsp [r l m n o]<br>[j r l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e q p s] &nbsp [e q p s t]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l m n o] &nbsp [l m n o e]<br>[e q p s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[n o e q] &nbsp [n o e q p]<br>[j r l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e q p s] &nbsp [e q p s t]<br>[r l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o e q p] &nbsp [o e q p s]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f k g h] &nbsp [f k g h i]<br>[j r l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k g h i] &nbsp [k g h i j]<br>[q p s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b c d f] &nbsp [b c d f k]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d f k g] &nbsp [d f k g h]<br>[i j r l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[o e q q p s] &nbsp [o e q p s]<br>[d f k k g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[d f k g g h] &nbsp [d f k g h]<br>[a b b c d f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[d f f k g h] &nbsp [d f k g h]<br>[b c d f k k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p s t t u v] &nbsp [p s t u v]<br>[o e q p s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[u u v w x y] &nbsp [u v w x y]<br>[j r l l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b c d d f k] &nbsp [b c d f k]<br>[r l m n o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e q p p s t] &nbsp [e q p s t]<br>[l m m n o e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j j r l m n] &nbsp [j r l m n]<br>[h h i j r l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[d f f k g h] &nbsp [d f k g h]<br>[g h i j j r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l l m n o e] &nbsp [l m n o e]<br>[u v v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[l m n g e] &nbsp [l m n o e]<br>[o e i p s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b p d f k] &nbsp [b c d f k]<br>[f k g h c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v n o e q] &nbsp [m n o e q]<br>[i j s l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[i e q p s] &nbsp [o e q p s]<br>[n o e q g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k g h i a] &nbsp [k g h i j]<br>[d e k g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k g s i j] &nbsp [k g h i j]<br>[o e z p s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[x l m n o] &nbsp [r l m n o]<br>[c e f k g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a b l d f] &nbsp [a b c d f]<br>[h w j r l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e p s t u] &nbsp [q p s t u]<br>[k p h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[o e b p s] &nbsp [o e q p s]<br>[b c d f j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[w u v t x] &nbsp [t u v w x]<br>[e q t s p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t u x w v] &nbsp [t u v w x]<br>[o n e q p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a b c f d] &nbsp [a b c d f]<br>[s q p e t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l m o n e] &nbsp [l m n o e]<br>[f k g i h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[c b a d f] &nbsp [a b c d f]<br>[m l r n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e m n o l] &nbsp [l m n o e]<br>[l i j r h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b c k f d] &nbsp [b c d f k]<br>[d b c a f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e q t s p] &nbsp [e q p s t]<br>[q o e n p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k c d f b] &nbsp [b c d f k]<br>[e q p t s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[r j i l m] &nbsp [i j r l m]<br>[b d c f k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[c d f k] &nbsp [c d f g]<br>[i j r l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h i j r] &nbsp [h i j l]<br>[e q p s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[o e q p] &nbsp [o e q s]<br>[f k g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c d f k] &nbsp [c d f g]<br>[h i j r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e q p s] &nbsp [e q p t]<br>[q p s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[g h i j] &nbsp [g h i r]<br>[i j r l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c d f k] &nbsp [c d f g]<br>[p s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q p s t] &nbsp [q p s u]<br>[j r l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[c d f k] &nbsp [c d f g]<br>[e q p s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h i j r] &nbsp [h i j l]<br>[b c d f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_5": {
    "shuffled_letters": [
      "k",
      "z",
      "y",
      "v",
      "i"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "k",
      "j",
      "z",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "y",
      "w",
      "x",
      "v",
      "i"
    ],
    "succ": [
      {
        "prompt": "[r s t u] &nbsp [r s t y]<br>[y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k j z l] &nbsp [k j z m]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[o p q r] &nbsp [o p q s]<br>[h k j z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[z l m n] &nbsp [z l m o]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t u y w] &nbsp [t u y x]<br>[y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k j z l] &nbsp [k j z m]<br>[u y w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k j z l] &nbsp [k j z m]<br>[y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m n o p] &nbsp [m n o q]<br>[k j z l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h k j z] &nbsp [h k j l]<br>[u y w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[d e f g] &nbsp [c e f g]<br>[w x v i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t u y w] &nbsp [s u y w]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e f g h] &nbsp [d f g h]<br>[h k j z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[y w x v] &nbsp [u w x v]<br>[w x v i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r s t u] &nbsp [q s t u]<br>[y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f g h k] &nbsp [e g h k]<br>[y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[w x v i] &nbsp [y x v i]<br>[s t u y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h k j z] &nbsp [g k j z]<br>[j z l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e f g h] &nbsp [d f g h]<br>[k j z l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b c d e] &nbsp [a c d e]<br>[w x v i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[h k j z] &nbsp [h k j z l]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r s t u] &nbsp [r s t u y]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[d e f g] &nbsp [d e f g h]<br>[y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j z l m] &nbsp [j z l m n]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g h k j] &nbsp [g h k j z]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r s t u] &nbsp [r s t u y]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[y w x v] &nbsp [y w x v i]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[y w x v] &nbsp [y w x v i]<br>[f g h k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e f g h] &nbsp [e f g h k]<br>[f g h k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[y w x v] &nbsp [y w x v i]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[y w w x v i] &nbsp [y w x v i]<br>[u y y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t t u y w x] &nbsp [t u y w x]<br>[e f f g h k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[y w x v v i] &nbsp [y w x v i]<br>[g h k k j z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j z l m m n] &nbsp [j z l m n]<br>[y w x v i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g h h k j z] &nbsp [g h k j z]<br>[y w w x v i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[y w x v i i] &nbsp [y w x v i]<br>[k j z l l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n o p p q r] &nbsp [n o p q r]<br>[g h h k j z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l l m n o p] &nbsp [l m n o p]<br>[y w x x v i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j j z l m n] &nbsp [j z l m n]<br>[s s t u y w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[y w x v i i] &nbsp [y w x v i]<br>[c c d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[h k j z e] &nbsp [h k j z l]<br>[y w h v i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k j z i m] &nbsp [k j z l m]<br>[y w x v f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a b c d j] &nbsp [a b c d e]<br>[n y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h k j a l] &nbsp [h k j z l]<br>[j z c m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[y w x f i] &nbsp [y w x v i]<br>[b c d k f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h k j z n] &nbsp [h k j z l]<br>[o p q l s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[z l m n q] &nbsp [z l m n o]<br>[k j z l p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u l w x v] &nbsp [u y w x v]<br>[y w x v c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[c d e p g] &nbsp [c d e f g]<br>[y w g v i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[r g h k j] &nbsp [f g h k j]<br>[y w x a i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[y i x v w] &nbsp [y w x v i]<br>[j z n m l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[y v x w i] &nbsp [y w x v i]<br>[o l m n z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u w y x v] &nbsp [u y w x v]<br>[i w x v y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j g h k f] &nbsp [f g h k j]<br>[l z j m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k h j z l] &nbsp [h k j z l]<br>[l z j m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h k z j l] &nbsp [h k j z l]<br>[t u y x w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c b d e f] &nbsp [b c d e f]<br>[u y x w v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i w x v y] &nbsp [y w x v i]<br>[t x y w u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[u y x w v] &nbsp [u y w x v]<br>[h k j l z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[o n p q r] &nbsp [n o p q r]<br>[y v x w i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[u y w x] &nbsp [u y w v]<br>[s t u y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r s t u] &nbsp [r s t y]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[h k j z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[k j z l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l m n o] &nbsp [l m n p]<br>[y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f g h k] &nbsp [f g h j]<br>[y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u y w x] &nbsp [u y w v]<br>[f g h k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t u y w] &nbsp [t u y x]<br>[y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h k j z] &nbsp [h k j l]<br>[u y w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[y w x v] &nbsp [y w x i]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_6": {
    "shuffled_letters": [
      "n",
      "r",
      "a",
      "k",
      "o"
    ],
    "shuffled_alphabet": [
      "n",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "r",
      "l",
      "m",
      "a",
      "k",
      "p",
      "q",
      "o",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    "succ": [
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[m a k p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q o s t] &nbsp [q o s u]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m a k p] &nbsp [m a k q]<br>[n b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k p q o] &nbsp [k p q s]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n b c d] &nbsp [n b c e]<br>[m a k p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p q o s] &nbsp [p q o t]<br>[r l m a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c d e f] &nbsp [c d e g]<br>[q o s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r l m a] &nbsp [r l m k]<br>[p q o s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n b c d] &nbsp [n b c e]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[j r l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[o s t u] &nbsp [q s t u]<br>[i j r l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k p q o] &nbsp [a p q o]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b c d e] &nbsp [n c d e]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k p q o] &nbsp [a p q o]<br>[a k p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[b c d e] &nbsp [n c d e]<br>[q o s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j r l m] &nbsp [i r l m]<br>[r l m a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k p q o] &nbsp [a p q o]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[w x y z] &nbsp [v x y z]<br>[i j r l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e f g h] &nbsp [d f g h]<br>[r l m a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i j r l] &nbsp [h j r l]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[p q o s] &nbsp [p q o s t]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k p q o] &nbsp [k p q o s]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j r]<br>[p q o s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h i j r] &nbsp [h i j r l]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n b c d] &nbsp [n b c d e]<br>[a k p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n b c d] &nbsp [n b c d e]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f g h i] &nbsp [f g h i j]<br>[q o s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r l m a] &nbsp [r l m a k]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m a k p] &nbsp [m a k p q]<br>[n b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a k p q] &nbsp [a k p q o]<br>[o s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[m a k k p q] &nbsp [m a k p q]<br>[e e f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n b b c d e] &nbsp [n b c d e]<br>[m m a k p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h i j r r l] &nbsp [h i j r l]<br>[g h i j j r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a a k p q o] &nbsp [a k p q o]<br>[c d d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m a k p q q] &nbsp [m a k p q]<br>[g h i j j r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[g h i j j r] &nbsp [g h i j r]<br>[h i j r l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r l m a a k] &nbsp [r l m a k]<br>[o s t u u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[o s s t u v] &nbsp [o s t u v]<br>[c d e e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b c c d e f] &nbsp [b c d e f]<br>[o s t u v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p q o s s t] &nbsp [p q o s t]<br>[t u u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[k b q o s] &nbsp [k p q o s]<br>[g l i j r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f r l m a] &nbsp [j r l m a]<br>[a k p g o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q o h t u] &nbsp [q o s t u]<br>[j r l i a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[i j e l m] &nbsp [i j r l m]<br>[f s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l j a k p] &nbsp [l m a k p]<br>[m a k r q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c p e f g] &nbsp [c d e f g]<br>[a n p q o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o q t u v] &nbsp [o s t u v]<br>[f g l i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[w b c d e] &nbsp [n b c d e]<br>[i j c l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[g n i j r] &nbsp [g h i j r]<br>[m a k w q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[s t u m w] &nbsp [s t u v w]<br>[j r l m v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[o v t u s] &nbsp [o s t u v]<br>[t o s q u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k a p q o] &nbsp [a k p q o]<br>[j i r l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l m k a p] &nbsp [l m a k p]<br>[l r j m a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r m l a k] &nbsp [r l m a k]<br>[x w v y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[u s t o v] &nbsp [o s t u v]<br>[m a p k q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[l i j r h] &nbsp [h i j r l]<br>[e c d b f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[p s o q t] &nbsp [p q o s t]<br>[k q p o s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e c d b f] &nbsp [b c d e f]<br>[k o q p s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v s t u o] &nbsp [o s t u v]<br>[v x w y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b f d e c] &nbsp [b c d e f]<br>[n b e d c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[n b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e f g h] &nbsp [e f g i]<br>[n b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[r l m a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q o s t] &nbsp [q o s u]<br>[n b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p q o s] &nbsp [p q o t]<br>[r l m a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h i j r] &nbsp [h i j l]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o s t u] &nbsp [o s t v]<br>[k p q o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p q o s] &nbsp [p q o t]<br>[n b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[g h i j] &nbsp [g h i r]<br>[h i j r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a k p q] &nbsp [a k p o]<br>[m a k p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  }
}