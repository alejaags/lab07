package data.services;

import data.HttpConection.HttpConnect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class dataServiceImpl implements dataService {

    @Autowired
    HttpConnect connection;

   

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
