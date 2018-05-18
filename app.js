const express =  require('express'); // on requiere express
const app = express(); // on créer l'application express !

const PORT = 3000;

//j'utilise un middleware pour utiliser un dossier static (fichier qui vont être servie statiquement) tel que les css et autres images !
app.use('/public', express.static('public'));

//je dit où se trouve mon fichier de views et mon moteur de template ici ejs
app.set('views', './views');
app.set('view engine', 'ejs');

//requete http get qui demande la page accueil
app.get('/', (req,res) => {                 // function(req,res){ res.send();} <<= ancienne notation
    res.render('index');
});

app.get('/movies', (req,res) => {
    res.render('movies');
});

//on fait attention à l'ordre des routes car celle du dessous est avec un parametres / sinon conflit !
app.get('/movies/add',(req,res) => {
    res.send('ajouter ce film');
});

//ici je récupère une id passé en parametre pour générer de façon dynamique les routes en fonction d'un id
app.get('/movies/:id/:title', (req,res) => {
    const id = req.params.id;
    const title = req.params.title;
    res.render('movie-details', {movieid: id, movietitle: title} );
});


//on écoute la réponse sur le serveur local
app.listen(PORT, () => {
    console.log(`on écoute sur le port ${PORT}`);
});

