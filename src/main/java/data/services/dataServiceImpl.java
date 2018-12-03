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
    public StringBuffer bolsa(String emp, String date) {
        StringBuffer bolsa = null;
        try {
            bolsa = connection.httpcenter(emp,date);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return bolsa;
    }
}