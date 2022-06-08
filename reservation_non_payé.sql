-- affiche le nom des clients qui n'ont pas encore payé leurs réservations
select count(nom_client) from client c
inner join reserver r
on r.id_client = c.id_client
inner join offre o 
on o.id_offre = r.id_offre
where o.tarif - r.montant_paye > 0;