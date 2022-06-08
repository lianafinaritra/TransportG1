-- Le chauffeur qui conduira lors d'un voyage prevus (date)
select nom_complet, jour_depart, v.id_voyage from chauffeur c
inner join vehicules ve
on c.id_vehicule = ve.id_vehicule
inner join utiliser u
on u.id_vehicule = ve.id_vehicule
inner join voyage v
on u.id_voyage = v.id_voyage;