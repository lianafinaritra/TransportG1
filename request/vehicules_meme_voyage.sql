
-- medium/hard
-- savoir toutes les véhicules qui parte pour une même voyage (offre, jour_depart, heure_depart)
SELECT matricule FROM vehicules ve
INNER JOIN utiliser ut ON ut.id_vehicule = ve.id_vehicule
INNER JOIN voyage vo ON vo.id_voyage = ut.id_voyage
INNER JOIN reserver re ON re.id_voyage = vo.id_voyage
INNER JOIN offre of ON of.id_offre = re.id_offre
WHERE type = 'premium' AND jour_depart = '2022-06-05' AND heure_depart = '21:00:00';