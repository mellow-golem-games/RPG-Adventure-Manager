(ns rpg-adventure-manager.scripts.curve)


(defn calculate-curve-x-initial [size starting-direction]
  "Gets the initial X position"
  (cond
    (= starting-direction "Top") (/ (:w size) 2)
    (= starting-direction "Bottom") (/ (:w size) 2)
    (= starting-direction "Left") 0
    (= starting-direction "Right") (:w size)))

(defn calculate-curve-y-initial [size starting-direction]
  "Gets the initial Y position"
  (cond
    (= starting-direction "Top") 0
    (= starting-direction "Bottom") (:h size)
    (= starting-direction "Left") (/ (:h size) 2)
    (= starting-direction "Right") (/ (:h size) 2)))

;size = size of Linked To Post
;position1 = position of the Linked To Post
;position2 = position of the linking post
(defn calculate-curve-x-end [size position1 position2 starting-direction]
  "Gets the end X position"
  (cond
    (= starting-direction "Top") (- (+ (:x position1) (* 0.5 (:w size))) (:x position2)) ;current x + 1/2 width - x size1
    (= starting-direction "Bottom") (- (+ (:x position1) (* 0.5 (:w size))) (:x position2)) ;^
    (= starting-direction "Left") (- (+ (:x position1) (:w size)) (:x position2)) ;current x - xsize one
    (= starting-direction "Right") (- (:x position1) (:x position2)))) ;current x + width - x size1

(defn calculate-curve-y-end [size position1 position2 starting-direction]
  "Gets the end Y position"
  (cond
    (= starting-direction "Top") (- (+ (:h size)(:y position1)) (:y position2)) ; height + y pos - pos 2 negitive to go up
    (= starting-direction "Bottom") (- (:y position1) (:y position2) ) ; y post - y position2
    (= starting-direction "Left") (- (+ (:y position1) (* 0.5 (:h size))) (:y position2)) ; 1/2 + pos y - y position2
    (= starting-direction "Right") (- (+ (:y position1)(* 0.5 (:h size))) (:y position2)))) ; 1/2 + pos - y position 2

; CONTROL POINT CALCULATORS
(defn caculate-first-control-point-x [direction distance xStart]
  (cond
    (= direction "Top") (- xStart 50)  ; start x - 50
    (= direction "Bottom") (+ xStart 50) ; start x + 50
    (= direction "Left") (/ distance 4)  ;1/4 distance
    (= direction "Right") (+ xStart (/ distance 4)) ;1/4 distance
  ))

(defn caculate-second-control-point-x [direction distance xStart]
  (cond
    (= direction "Top") (+ xStart 50)  ; start x + 50
    (= direction "Bottom") (- xStart 50) ; start x - 50
    (= direction "Left") (* 3 (/ distance 4))  ;3/4 distance
    (= direction "Right") (+ xStart  (* 3 (/ distance 4)) );3/4 distance
  ))

(defn caculate-first-control-point-y [direction distance yStart]
  (cond
    (= direction "Top") (/ distance 4)
    (= direction "Bottom") (+ yStart (/ distance 4))
    (= direction "Left") (- yStart 50)
    (= direction "Right") (+ yStart 50)
  ))

(defn caculate-second-control-point-y [direction distance yStart]
  (cond
    (= direction "Top") (* 3 (/ distance 4))
    (= direction "Bottom") (+ yStart (* 3 (/ distance 4)))
    (= direction "Left") (+ yStart 50)
    (= direction "Right") (- yStart 50)
  ))