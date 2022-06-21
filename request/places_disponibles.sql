
-- hard
-- compter et stoccker les nombres de places reservés dans un voyage
CREATE view Count_reserver AS SELECT count(place) FROM reserver INNER JOIN voyage
ON voyage.id_voyage = reserver.id_voyage
WHERE voyage.id_voyage = 2;

--stocker le nombres de places du vehicule utilisé pour le voyage
CREATE view nombre_place AS SELECT nombre_places FROM vehicules
INNER JOIN utiliser ON utiliser.id_vehicule = vehicules.id_vehicule
INNER JOIN voyage ON voyage.id_voyage = utiliser.id_voyage
WHERE voyage.id_voyage = 2;

--soustraire le nombre de places du vehicules et le nombre de places reservés pour avoir le nombre de places disponibles
 SELECT nombre_places-count AS nombre_de_places_disponibles FROM nombre_place,Count_reserver;