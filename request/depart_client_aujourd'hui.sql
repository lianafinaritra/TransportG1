-- afficher les clients qui partent aujourd'hui
select nom_client, prenom_client, jour_depart from client c
inner join reserver r
on c.id_client=r.id_client
inner join voyage v
on v.id_voyage=r.id_voyage
where jour_depart = date (now ());