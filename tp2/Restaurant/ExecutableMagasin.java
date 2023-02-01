public class ExecutableMagasin{
    public static void main(String[] args){
        Magasin Fleurus = new Magasin("Fleurus", true, false);

        Ville trainou = new Ville("Trainou");

        trainou.ajouteMagasin("BeauMagasin", true, true);
        trainou.ajouteMagasin("Venir", false, false);
        trainou.ajouteMagasin("Magnifique", false, true);
        trainou.ajouteMagasin("Bauchamp", true, false);

        System.out.println(trainou.toString());
        System.out.println(trainou.ouvertsLeLundi());
        System.out.println(Fleurus.getOuvertDimanche());
    }


}