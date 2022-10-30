package com.ontimize.hr.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("MaterialDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/MaterialDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class CandidateDao extends OntimizeJdbcDaoSupport {

 public static final String ATTR_ID = "ID";
 public static final String ATTR_NAME = "";
 public static final String ATTR_ = "NAME";
 public static final String ATTR_SURNAME = "SURNAME";

 

}