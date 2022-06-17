
-- medium
-- affcher le véhicule le plus utilisé
SELECT matricule,count(*) AS utilisée FROM utiliser 
INNER JOIN vehicules ON utiliser.id_vehicule = vehicules.id_vehicule 
GROUP BY utiliser.id_vehicule,matricule 
ORDER BY utilisée DESC LIMIT 1;