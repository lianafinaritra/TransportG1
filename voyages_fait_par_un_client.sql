-- Les voyages déjà effectués par un client précis (avant aujourd'hui)
select count(r.id_voyage) from client c
inner join reserver r
on c.id_client = r.id_client
inner join voyage v 
on r.id_voyage=v.id_voyage
where nom_client = 'Cattel' and jour_depart < date(now());