
-- medium
-- affcher l'offre le plus fréquemment achetée
 SELECT type, count(*) AS achetée FROM reserver 
 INNER JOIN offre ON reserver.id_offre = offre.id_offre 
 GROUP BY reserver.id_offre,type 
 ORDER BY achetée DESC LIMIT 1;