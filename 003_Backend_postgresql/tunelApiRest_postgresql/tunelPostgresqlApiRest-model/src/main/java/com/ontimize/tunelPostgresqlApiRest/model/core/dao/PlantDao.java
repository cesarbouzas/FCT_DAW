package com.ontimize.tunelPostgresqlApiRest.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("PlantDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/PlantDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class PlantDao extends OntimizeJdbcDaoSupport {

 public static final String TAG="plant_";	
 public static final String ATTR_ID = TAG+"id";
 public static final String ATTR_TYPE = TAG+"unit";
 public static final String ATTR_NAME = TAG+"name";
 public static final String ATTR_PRODUCTIVITY = TAG+"price";
 public static final String ATTR_PRICE=TAG+"description";
 public static final String ATTR_SPENT=TAG+"";
 public static final String ATTR_PRICE_GASOIL=TAG+"";
 public static final String ATTR_PRICE_KW=TAG+"";
 public static final String ATTR_PRICE_LUBRICANT=TAG+"";
 public static final String ATTR_PRICE_OPERATOR=TAG+"";
 public static final String ATTR_PRICE_SUBOPERATOR=TAG+"";
 public static final String ATTR_PRICE_DIET_OPERATOR=TAG+"";
 

}