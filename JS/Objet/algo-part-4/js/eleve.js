class Eleve {
    constructor(n, p, c) {
        this.name = n;
        this.firstname = p;
        this.classe = c;
        this.notes = { maths: [], algorithmique: [], javascript: [] };

    }
    //etape2
    bonjour() {
        alert(`Je m'appelle ${this.firstname} ${this.name} et je suis élève en ${this.classe}`)
    }

    //etape3
    addNoteAlgo(n) {
        this.notes.algorithmique.push(n)
    }

    //Façon plus ergonomique permettant de rajouter une note à n'importe quelle matiere
    addNote(matiere, note) {
        this.notes[matiere].push(note)
    }
}
