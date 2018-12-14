package data.services;

import data.HttpConection.HttpConnect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class dataServiceImpl implements dataService {

    @Autowired
    HttpConnect connection;

   
    /**
     * consult a movie by title and year
     * @param title name of the movie
     * @param year year that the movie was published
     * @return returns the js that refers this movie
     */
    @Override
    public StringBuffer movie(String title, String year) {
        StringBuffer mov = null;
        try {
            mov = connection.httpcenter(title,year);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return mov;
    }
}
