-- matricule, chauffeur pour un voyage donné
select  v.id_voyage, matricule, nom_complet
from vehicules veh
inner join utiliser u
on u.id_vehicule = veh.id_vehicule
inner join chauffeur c
on c.id_vehicule = veh.id_vehicule
inner join voyage v
on u.id_voyage = v.id_voyage
inner join ville vi
on vi.id_ville = v.id_ville_depart
where v.id_voyage = 1;