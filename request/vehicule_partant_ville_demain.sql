
-- medium
-- compte le nombre de véhicules qui vont partir demaint à cette heure vers cette ville
SELECT count(*) FROM vehicules ve
INNER JOIN utiliser ut on ut.id_vehicule = ve.id_vehicule
INNER JOIN voyage vo on vo.id_voyage = ut.id_voyage
INNER JOIN ville vi on vi.id_ville = vo.id_ville_arrivee
WHERE jour_depart = (date(now())+1)
AND heure_depart = '11:00'
AND nom_ville = 'banjar Tengahbelayu';