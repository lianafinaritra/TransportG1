
-- easy
-- affiche les voyages passant par une ville définie
SELECT jour_depart, id_voyage FROM voyage
INNER JOIN passer_par ON passer_par.id_voyage = voyage.id_voyage
INNER JOIN ville ON passer_par.id_ville = ville.id_ville
WHERE nom_ville = 'Pacora';