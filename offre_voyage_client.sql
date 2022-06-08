
-- easy
-- affiche les clients ayant choisi une offre pour un voyage
SELECT nom_client,prenom_client FROM client
INNER JOIN reserver ON reserver.id_client = client.id_client
INNER JOIN offre ON reserver.id_offre = offre.id_offre
INNER JOIN voyage ON reserver.id_voyage = voyage.id_voyage
WHERE offre.id_offre = '3'
AND voyage.id_voyage = '16';