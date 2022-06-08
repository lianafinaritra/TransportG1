
-- medium
-- compte le nombre de clients qui n'ont pas encore payé l'integralité de leurs frais
SELECT count(*) FROM client c
INNER JOIN reserver on reserver.id_client = client.id_client
INNER JOIN offre on offre.id_offre = reserver.id_offre
WHERE tarif > montant_paye;