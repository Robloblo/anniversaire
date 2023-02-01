import java.util.ArrayList;
import java.util.List;

public class Ville{
    private String nom;
    private List<Magasin> magasins;
    
    public Ville(String nom){
        this.nom = nom;
        this.magasins = new ArrayList<>();
    }

    public void ajouteMagasin(String nom, boolean lundi,boolean dimanche){
        Magasin magasin = new Magasin(nom,lundi,dimanche);
        this.magasins.add(magasin);
    }

    public List<Magasin> ouvertsLeLundi(){

        List<Magasin> magasinsOuvertLundi;
        magasinsOuvertLundi = new ArrayList<>();
        
        for(Magasin magasin: this.magasins){
            if(magasin.getOuvertLundi()){
                magasinsOuvertLundi.add(magasin);
            }
            
        }
        return magasinsOuvertLundi;
    }

    @Override
    public String toString(){
        
        String message = "";
        for(Magasin magasin: this.magasins){
            message += magasin.getNom() +" ";
        }
        return message;
    }
}