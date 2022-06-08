-- Les arrêts lors d'un voyage
select id_voyage, nom_ville from passer_par pass
inner join ville vi
on vi.id_ville = pass.id_ville;