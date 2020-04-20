    let mapToWeights = new Map();
    let mapToWeightsFinal = new Map();
    let mapToSubCats = new Map();
    let mapToSubCatsFinal = new Map();
    let mapToCats = new Map()
    let mapToCatsFinal = new Map();
    let mapToScoresFinal = new Map();
    let mapJSON = new Map();
    createMaps();

    //subcategory variables
    var runningScoreTotalFunding = 0;
    var runningScoreAvgFunding = 0;
    var runningWeightsFunding = 0;

    var runningScoreTotalFinancial = 0;
    var runningScoreAvgFinancial = 0;
    var runningWeightsFinancial = 0;

    var runningScoreTotalOperation = 0;
    var runningScoreAvgOperation = 0;
    var runningWeightsOperation = 0;

    var runningScoreTotalGov = 0;
    var runningScoreAvgGov = 0;
    var runningWeightsGov = 0;

    var runningScoreTotalTrans = 0;
    var runningScoreAvgTrans = 0;
    var runningWeightsTrans = 0;

    var runningScoreTotalAccount = 0;
    var runningScoreAvgAccount = 0;
    var runningWeightsAccount = 0;

    var runningScoreTotalOrganization = 0;
    var runningScoreAvgOrganization = 0;
    var runningWeightsOrganization = 0;

    var runningScoreTotalVolume = 0;
    var runningScoreAvgVolume = 0;
    var runningWeightsVolume = 0;

    var runningScoreTotalEfficiency = 0;
    var runningScoreAvgEfficiency = 0;
    var runningWeightsEfficiency = 0;

    var runningScoreTotalCare = 0;
    var runningScoreAvgCare = 0;
    var runningWeightsCare = 0;

    //category variables
    //regional impact potential
    var runningScoreTotalRegional = 0;
    var runningScoreAvgRegional = 0;
    var runningWeightsRegional = 0;
    //external relations
    var runningScoreTotalRelations = 0;
    var runningScoreAvgRelations = 0;
    var runningWeightsRelations = 0;
    //volunteer opportunity
    var runningScoreTotalVolOppt = 0;
    var runningScoreAvgVolOppt = 0;
    var runningWeightsVolOppt = 0;
    //volunteer satisfaction
    var runningScoreTotalVolSats = 0;
    var runningScoreAvgVolSats = 0;
    var runningWeightsVolSats = 0;
    var totalScore = 0;

    //categories
    var financialHealth = 0;
    var operationalPerformance = 0;


    var totalFinancialHealthWeight = 0
    var totalOperationalPerfWeight = 0


    //for testing
    var obj = {}


    computeScores();

    var computeScores = function() {
        obj ={}
      obj ={};
      obj['Socioeconomic Status of Patient Population']=5;
      obj['Local Population Income Mix']=4;
      obj['Local Patient Population Density']=5;
      obj['Alternative Care Options']=3;
      obj['Local Maternal Mortality Rate (MMR)']=4;
      obj['Local Infant Mortality Rate (IMR)']=5;
      obj['Additional Services']=4;
      obj['Diversity of Revenue Sources']=4;
      obj['Donations Percent of Revenue']=3;
      obj['Operating Margin']=4;
      obj['Program Expense Percentage']=4;
      obj['Administrative Expense Percentage']=4;
      obj['Capital Expenditure Percentage']=3;
      obj['Fundraising Expense Percentage']=4;
      obj['Fundraising Efficiency']=4;
      obj['Program Expense Growth']=2;
      obj['Liabilities to Assets Ratio']=3;
      obj['Charity Care Percentage']=5;
      obj['Budget']=5;
      obj['Auditing']=5;
      obj['Accounting Books']=5;
      obj['Bank Accounts']=5;
      obj['Safety of Funds']=5;
      obj['Cost Per Life Saved']=5;
      obj['Charity Care Efficiency']=4;
      obj['Formal Governance Structure']=3;
      obj['Commitment to Mission']=3.66666666666667;
      obj['Strategic Plan and Implementation']=4;
      obj['Key Performance Indicators']=4;
      obj['Alternate Implementation Plans']=3;
      obj['Systems Capacity']=4;
      obj['Board Independence']=5;
      obj['Permanent Board Members']=5;
      obj['Board Meetings']=4;
      obj['Annual General Meetings']=5;
      obj['Board Review']=0;
      obj['Board Donation Oversight']=5;
      obj['Appointed CEO']=5;
      obj['Legal Support']=3;
      obj['Operational Policies']=3;
      obj['Culture of Continuous Improvement']=5;
      obj['Outcomes Reporting']=3;
      obj['Donor Privacy Policy']=5;
      obj['Website']=5;
      obj['Appropriate Standards of Care']=4;
      obj['Equal Services for All Patients']=3;
      obj['Community Engagement']=4.66666666666667;
      obj['Quality Certifications']=4;
      obj['Awards Conferred']=3;
      obj['Major Surgeries']=4;
      obj['Child Deliveries']=5;
      obj['Outpatient Visits']=5;
      obj['Bed Occupancy']=5;
      obj['Weighted Average Patient Volume CAGR']=4;
      obj['Hospital Maternal Mortality Rate (MMR)']=4;
      obj['Hospital Infant Mortality Rate (IMR)']=4;
      obj['Patient Mortality Risk']=5;
      obj['Patient Readmission Rate']=1;
      obj['Days to Visit']=5;
      obj['Patient Satisfaction - Service']=5;
      obj['Patient Satisfaction - Staff']=5;
      obj['Patient Satisfaction - Hospital Cleanliness']=3;
      obj['Staff Satisfaction']=5;
      obj['Staff Experience']=4;
      obj['Staff Meetings']=5;
      obj['Staff Turnover']=4;
      obj['Physician Performance']=4;
      obj['Leadership Credibility']=5;
      obj['Donor Satisfaction']=5;
      obj['Charity Rating Organizations']=3;
      obj['Collaboration']=2;
      obj['Exchange Programs']=3;
      obj['Respect of Community']=4;
      obj['Volunteer Responsibility']=4.33333333333333;
      obj['Expected Volunteer Experience']=3;
      obj['Spousal Job Opportunities']=3;
      obj['Child Education Opportunities']=4;
      obj['Housing Opportunities']=4;
      obj['Local Safety']=4;
      obj['Local Safety Perception']=3;
      obj['Volunteer Recommendation']=4;
      obj['Overall Volunteer Satisfaction']=4;
      obj['Skills Match']=5;
      obj['Learning Opportunities']=4;
      obj['Career Development']=4;
      obj['Job Training Appropriateness']=3;
      obj['Community Affiliation']=5;
      obj['Strategy and Influence']=3;
      obj['Philanthropic Impact']=5;
      obj['Flexibility']=5;
      obj['Supervision']=4;
      obj['Recognition']=3;
      obj['Achievement']=3;
        
          for (let key of mapToWeightsFinal.keys()) { //key is the variable name
            mapJSON[key] = obj[key];
          }
      computeSubCatScore(mapJSON);

    }




    var computeSubCatScore = function(mapToScores) {

      //funding sources
      for (let variable of mapToScores.keys()) {
        if (mapToSubCats.get(variable) == "Funding Sources") {
          runningScoreTotalFunding = runningScoreTotalFunding + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeightsFunding = runningWeightsFunding + mapToWeights.get(variable);

        }
        if (mapToSubCats.get(variable) == "Financial Capacity") {
          runningScoreTotalFinancial = runningScoreTotalFinancial + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeightsFinancial = runningWeightsFinancial + mapToWeights.get(variable);
        }
        if (mapToSubCats.get(variable) == "Operational Efficiency") {
          runningScoreTotalOperation = runningScoreTotalOperation + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeightsOperation = runningWeightsOperation + mapToWeights.get(variable);
        }
        if (mapToSubCats.get(variable) == "Governance") {
          runningScoreTotal = runningScoreTotal + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeights = runningWeights + mapToWeights.get(variable);
        }
        if (mapToSubCats.get(variable) == "Transparency") {
          runningScoreTotal = runningScoreTotal + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeights = runningWeights + mapToWeights.get(variable);
        }
        if (mapToSubCats.get(variable) == "Accountability") {
          runningScoreTotal = runningScoreTotal + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeights = runningWeights + mapToWeights.get(variable);
        }
        if (mapToSubCats.get(variable) == "Organization Quality") {
          runningScoreTotal = runningScoreTotal + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeights = runningWeights + mapToWeights.get(variable);
        }
        if (mapToSubCats.get(variable) == "Volume") {
          runningScoreTotal = runningScoreTotal + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeights = runningWeights + mapToWeights.get(variable);
        }
        if (mapToSubCats.get(variable) == "Financial Efficiency") {
          runningScoreTotal = runningScoreTotal + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeights = runningWeights + mapToWeights.get(variable);
        }
        if (mapToSubCats.get(variable) == "Care Quality") {
          runningScoreTotal = runningScoreTotal + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeights = runningWeights + mapToWeights.get(variable);
        }
      }
      runningScoreAvgFunding = runningScoreTotalFunding / runningWeightsFunding;
      runningScoreAvgFinancial = runningScoreTotalFinancial / runningWeightsFinancial;
      runningScoreAvgOperation = runningScoreTotalOperation / runningWeightsOperation;
      runningScoreAvgGov = runningScoreTotalGov / runningWeightsGov;
      runningScoreAvgTrans = runningScoreTotalTrans / runningWeightsTrans;
      runningScoreAvgAccount = runningScoreTotalAccount / runningWeightsAccount;
      runningScoreAvgOrganization = runningScoreTotalOrganization / runningWeightsOrganization;
      runningScoreAvgVolume = runningScoreTotalVolume / runningWeightsVolume;

            computeCatScore(mapJSON);
      


    }



  

    var computeCatScore = function(mapToScores) {
      totalFinancialHealthWeight = runningWeightsAccount + runningWeightsFunding + runningWeightsEfficiency + runningWeightsFinancial;
      totalOperationalPerfWeight = runningWeightsOperation + runningWeightsGov + runningWeightsTrans + runningWeightsOrganization + runningWeightsVolume + runningWeightsCare;

      for (let variable of mapToScores.keys()) {

        if (maptoCats.get(variable) == "Regional Impact Potential") {
          runningScoreTotalRegional = runningScoreTotal + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeightsRegional = runningWeights + mapToWeights.get(variable);
        }

        if (maptoCats.get(variable) == "External Relations") {
          runningScoreTotalRegional = runningScoreTotal + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeightsRegional = runningWeights + mapToWeights.get(variable);
        }

        if (maptoCats.get(variable) == "Volunteer Opportunity") {
          runningScoreTotalRegional = runningScoreTotal + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeightsRegional = runningWeights + mapToWeights.get(variable);
        }

        if (maptoCats.get(variable) == "Volunteer Satisfaction") {
          runningScoreTotalRegional = runningScoreTotal + mapToScores.get(variable) * mapToWeights.get(variable);
          runningWeightsRegional = runningWeights + mapToWeights.get(variable);
        }
      }
      runningScoreAvgRegional = runningScoreTotalRegional / runningWeightsRegional;
      runningScoreAvgRelations = runningScoreTotalRelations / runningWeightsRelations;
      runningScoreAvgVolOppt = runningScoreTotalVolOppt / runningWeightsVolOppt;
      runningScoreAvgVolSats = runningScoreTotalVolSats / runningWeightsVolSats;


      //financial health: funding sources, financial efficiency, financial capacity, accountability
      financialHealth = (runningScoreTotalFunding + runningScoreTotalEfficiency + runningScoreTotalFinancial + runningScoreTotalAccount) /
        (runningWeightsAccount + runningWeightsFunding + runningWeightsEfficiency + runningWeightsFinancial);

      //operational performance: operational effciency, governance, transparency, organization quality, volume, care quality
      operationalPerformance = (runningScoreTotalOperation + runningScoreTotalGov + runningScoreTotalTrans + runningScoreTotalOrganization + runningScoreTotalVolume + runningScoreTotalCare) /
        (runningWeightsOperation + runningWeightsGov + runningWeightsTrans + runningWeightsOrganization + runningWeightsVolume + runningWeightsCare);

        computeTotalScore();



    }



    var computeTotalScore = function() {
      totalScore = (runningScoreTotalRegional + runningScoreTotalRelations + runningScoreTotalVolOppt + runningScoreTotalVolSats + financialHealth + operationalPerformance) /
        (runningWeightsRegional + runningWeightsRelations + runningWeightsVolOppt + runningWeightsVolSats + totalFinancialHealthWeight + totalOperationalPerfWeight);

      obj['funding sources'] = runningScoreAvgFunding;
      obj['financial capacity'] = runningScoreAvg;
      obj['operational effciency'] = runningScoreAvgOperation;
      obj['governance'] = runningScoreAvgGov;
      obj['transparency'] = runningScoreAvgTrans;
      obj['accountability'] = runningScoreAvgAccount;
      obj['organization quality'] = runningScoreAvgOrganization;
      obj['volume'] = runningScoreAvgVolume;
      obj['financial efficiency'] = runningScoreAvgEfficiency;
      obj['care quality'] = runningScoreAvgCare;
      obj['regional impact potential'] = runningScoreAvgRegional;
      obj['external relations'] = runningScoreAvgRelations;
      obj['volunteer opportunity'] = runningScoreAvgVolOppt;
      obj['volunteer satisfaction'] = runningScoreAvgVolSats;
      obj['financial health'] = financialHealth;
      obj['operational performance'] = operationalPerformance;
      obj['score'] = totalScore;

      //firestore();
      console.log(JSON.stringify(obj));

    }




    var createMaps = function() {
      mapToWeights.set('Socioeconomic Status of Patient Population', 10)
      mapToWeights.set('Local Population Income Mix', 6)
      mapToWeights.set('Local Patient Population Density', 8)
      mapToWeights.set('Alternative Care Options', 9)
      mapToWeights.set('Local Maternal Mortality Rate (MMR)', 10)
      mapToWeights.set('Local Infant Mortality Rate (IMR)', 10)
      mapToWeights.set('Additional Services', 4)
      mapToWeights.set('Diversity of Revenue Sources', 7)
      mapToWeights.set('Donations Percent of Revenue', 7)
      mapToWeights.set('Operating Margin', 6)
      mapToWeights.set('Program Expense Percentage', 7)
      mapToWeights.set('Administrative Expense Percentage', 5)
      mapToWeights.set('Capital Expenditure Percentage', 5)
      mapToWeights.set('Fundraising Expense Percentage', 5)
      mapToWeights.set('Fundraising Efficiency', 5)
      mapToWeights.set('Program Expense Growth', 4)
      mapToWeights.set('Liabilities to Assets Ratio', 1)
      mapToWeights.set('Charity Care Percentage', 6)
      mapToWeights.set('Budget', 2)
      mapToWeights.set('Auditing', 1)
      mapToWeights.set('Accounting Books', 1)
      mapToWeights.set('Bank Accounts', 1)
      mapToWeights.set('Safety of Funds', 5)
      mapToWeights.set('Cost Per Life Saved', 7)
      mapToWeights.set('Charity Care Efficiency', 6)
      mapToWeights.set('Formal Governance Structure', 6)
      mapToWeights.set('Commitment to Mission', 3)
      mapToWeights.set('Strategic Plan and Implementation', 6)
      mapToWeights.set('Key Performance Indicators', 3)
      mapToWeights.set('Alternate Implementation Plans', 3)
      mapToWeights.set('Systems Capacity', 6)
      mapToWeights.set('Board Independence', 2)
      mapToWeights.set('Permanent Board Members', 1)
      mapToWeights.set('Board Meetings', 1)
      mapToWeights.set('Annual General Meetings', 1)
      mapToWeights.set('Board Review', 1)
      mapToWeights.set('Board Donation Oversight', 1)
      mapToWeights.set('Appointed CEO', 1)
      mapToWeights.set('Legal Support', 2)
      mapToWeights.set('Operational Policies', 1)
      mapToWeights.set('Culture of Continuous Improvement', 1)
      mapToWeights.set('Outcomes Reporting', 3)
      mapToWeights.set('Donor Privacy Policy', 1)
      mapToWeights.set('Website', 1)
      mapToWeights.set('Appropriate Standards of Care', 6)
      mapToWeights.set('Equal Services for All Patients', 7)
      mapToWeights.set('Community Engagement', 6)
      mapToWeights.set('Quality Certifications', 2)
      mapToWeights.set('Awards Conferred', 4)
      mapToWeights.set('Major Surgeries', 5)
      mapToWeights.set('Child Deliveries', 5)
      mapToWeights.set('Outpatient Visits', 6)
      mapToWeights.set('Bed Occupancy', 7)
      mapToWeights.set('Weighted Average Patient Volume CAGR', 4)
      mapToWeights.set('Hospital Maternal Mortality Rate (MMR)', 4)
      mapToWeights.set('Hospital Infant Mortality Rate (IMR)', 4)
      mapToWeights.set('Patient Mortality Risk', 2)
      mapToWeights.set('Patient Readmission Rate', 1)
      mapToWeights.set('Days to Visit', 2)
      mapToWeights.set('Patient Satisfaction - Service', 1)
      mapToWeights.set('Patient Satisfaction - Staff', 1)
      mapToWeights.set('Patient Satisfaction - Hospital Cleanliness', 1)
      mapToWeights.set('Staff Satisfaction', 1)
      mapToWeights.set('Staff Experience', 1)
      mapToWeights.set('Staff Meetings', 1)
      mapToWeights.set('Staff Turnover', 1)
      mapToWeights.set('Physician Performance', 1)
      mapToWeights.set('Leadership Credibility', 7)
      mapToWeights.set('Donor Satisfaction', 3)
      mapToWeights.set('Charity Rating Organizations', 1)
      mapToWeights.set('Collaboration', 2)
      mapToWeights.set('Exchange Programs', 1)
      mapToWeights.set('Respect of Community', 1)
      mapToWeights.set('Volunteer Responsibility', 1)
      mapToWeights.set('Expected Volunteer Experience', 1)
      mapToWeights.set('Spousal Job Opportunities', 1)
      mapToWeights.set('Child Education Opportunities', 1)
      mapToWeights.set('Housing Opportunities', 1)
      mapToWeights.set('Local Safety', 2)
      mapToWeights.set('Local Safety Perception', 2)
      mapToWeights.set('Volunteer Recommendation', 3)
      mapToWeights.set('Overall Volunteer Satisfaction', 1)
      mapToWeights.set('Skills Match', 1)
      mapToWeights.set('Learning Opportunities', 3)
      mapToWeights.set('Career Development', 2)
      mapToWeights.set('Job Training Appropriateness', 2)
      mapToWeights.set('Community Affiliation', 3)
      mapToWeights.set('Strategy and Influence', 2)
      mapToWeights.set('Philanthropic Impact', 3)
      mapToWeights.set('Flexibility', 1)
      mapToWeights.set('Supervision', 2)
      mapToWeights.set('Recognition', 1)
      mapToWeights.set('Achievement', 3)


      mapToCats.set('Socioeconomic Status of Patient Population', 'Regional Impact Potential')
      mapToCats.set('Local Population Income Mix', 'Regional Impact Potential')
      mapToCats.set('Local Patient Population Density', 'Regional Impact Potential')
      mapToCats.set('Alternative Care Options', 'Regional Impact Potential')
      mapToCats.set('Local Maternal Mortality Rate (MMR)', 'Regional Impact Potential')
      mapToCats.set('Local Infant Mortality Rate (IMR)', 'Regional Impact Potential')
      mapToCats.set('Additional Services', 'Regional Impact Potential')
      mapToCats.set('Diversity of Revenue Sources', 'Financial Health')
      mapToCats.set('Donations Percent of Revenue', 'Financial Health')
      mapToCats.set('Operating Margin', 'Financial Health')
      mapToCats.set('Program Expense Percentage', 'Financial Health')
      mapToCats.set('Administrative Expense Percentage', 'Financial Health')
      mapToCats.set('Capital Expenditure Percentage', 'Financial Health')
      mapToCats.set('Fundraising Expense Percentage', 'Financial Health')
      mapToCats.set('Fundraising Efficiency', 'Financial Health')
      mapToCats.set('Program Expense Growth', 'Financial Health')
      mapToCats.set('Liabilities to Assets Ratio', 'Financial Health')
      mapToCats.set('Charity Care Percentage', 'Financial Health')
      mapToCats.set('Budget', 'Financial Health')
      mapToCats.set('Auditing', 'Financial Health')
      mapToCats.set('Accounting Books', 'Financial Health')
      mapToCats.set('Bank Accounts', 'Financial Health')
      mapToCats.set('Safety of Funds', 'Financial Health')
      mapToCats.set('Cost Per Life Saved', 'Operational Performance')
      mapToCats.set('Charity Care Efficiency', 'Operational Performance')
      mapToCats.set('Formal Governance Structure', 'Operational Performance')
      mapToCats.set('Commitment to Mission', 'Operational Performance')
      mapToCats.set('Strategic Plan and Implementation', 'Operational Performance')
      mapToCats.set('Key Performance Indicators', 'Operational Performance')
      mapToCats.set('Alternate Implementation Plans', 'Operational Performance')
      mapToCats.set('Systems Capacity', 'Operational Performance')
      mapToCats.set('Board Independence', 'Operational Performance')
      mapToCats.set('Permanent Board Members', 'Operational Performance')
      mapToCats.set('Board Meetings', 'Operational Performance')
      mapToCats.set('Annual General Meetings', 'Operational Performance')
      mapToCats.set('Board Review', 'Operational Performance')
      mapToCats.set('Board Donation Oversight', 'Operational Performance')
      mapToCats.set('Appointed CEO', 'Operational Performance')
      mapToCats.set('Legal Support', 'Operational Performance')
      mapToCats.set('Operational Policies', 'Operational Performance')
      mapToCats.set('Culture of Continuous Improvement', 'Operational Performance')
      mapToCats.set('Outcomes Reporting', 'Operational Performance')
      mapToCats.set('Donor Privacy Policy', 'Operational Performance')
      mapToCats.set('Website', 'Operational Performance')
      mapToCats.set('Appropriate Standards of Care', 'Operational Performance')
      mapToCats.set('Equal Services for All Patients', 'Operational Performance')
      mapToCats.set('Community Engagement', 'Operational Performance')
      mapToCats.set('Quality Certifications', 'Operational Performance')
      mapToCats.set('Awards Conferred', 'Operational Performance')
      mapToCats.set('Major Surgeries', 'Operational Performance')
      mapToCats.set('Child Deliveries', 'Operational Performance')
      mapToCats.set('Outpatient Visits', 'Operational Performance')
      mapToCats.set('Bed Occupancy', 'Operational Performance')
      mapToCats.set('Weighted Average Patient Volume CAGR', 'Operational Performance')
      mapToCats.set('Hospital Maternal Mortality Rate (MMR)', 'Operational Performance')
      mapToCats.set('Hospital Infant Mortality Rate (IMR)', 'Operational Performance')
      mapToCats.set('Patient Mortality Risk', 'Operational Performance')
      mapToCats.set('Patient Readmission Rate', 'Operational Performance')
      mapToCats.set('Days to Visit', 'Operational Performance')
      mapToCats.set('Patient Satisfaction - Service', 'Operational Performance')
      mapToCats.set('Patient Satisfaction - Staff', 'Operational Performance')
      mapToCats.set('Patient Satisfaction - Hospital Cleanliness', 'Operational Performance')
      mapToCats.set('Staff Satisfaction', 'Operational Performance')
      mapToCats.set('Staff Experience', 'Operational Performance')
      mapToCats.set('Staff Meetings', 'Operational Performance')
      mapToCats.set('Staff Turnover', 'Operational Performance')
      mapToCats.set('Physician Performance', 'Operational Performance')
      mapToCats.set('Leadership Credibility', 'External Relations')
      mapToCats.set('Donor Satisfaction', 'External Relations')
      mapToCats.set('Charity Rating Organizations', 'External Relations')
      mapToCats.set('Collaboration', 'External Relations')
      mapToCats.set('Exchange Programs', 'External Relations')
      mapToCats.set('Respect of Community', 'External Relations')
      mapToCats.set('Volunteer Responsibility', 'Volunteer Opportunity')
      mapToCats.set('Expected Volunteer Experience', 'Volunteer Opportunity')
      mapToCats.set('Spousal Job Opportunities', 'Volunteer Opportunity')
      mapToCats.set('Child Education Opportunities', 'Volunteer Opportunity')
      mapToCats.set('Housing Opportunities', 'Volunteer Opportunity')
      mapToCats.set('Local Safety', 'Volunteer Opportunity')
      mapToCats.set('Local Safety Perception', 'Volunteer Opportunity')
      mapToCats.set('Volunteer Recommendation', 'Volunteer Satisfaction')
      mapToCats.set('Overall Volunteer Satisfaction', 'Volunteer Satisfaction')
      mapToCats.set('Skills Match', 'Volunteer Satisfaction')
      mapToCats.set('Learning Opportunities', 'Volunteer Satisfaction')
      mapToCats.set('Career Development', 'Volunteer Satisfaction')
      mapToCats.set('Job Training Appropriateness', 'Volunteer Satisfaction')
      mapToCats.set('Community Affiliation', 'Volunteer Satisfaction')
      mapToCats.set('Strategy and Influence', 'Volunteer Satisfaction')
      mapToCats.set('Philanthropic Impact', 'Volunteer Satisfaction')
      mapToCats.set('Flexibility', 'Volunteer Satisfaction')
      mapToCats.set('Supervision', 'Volunteer Satisfaction')
      mapToCats.set('Recognition', 'Volunteer Satisfaction')
      mapToCats.set('Achievement', 'Volunteer Satisfaction')

      mapToSubCatsj.set('Socioeconomic Status of Patient Population', '')
      mapToSubCatsj.set('Local Population Income Mix', '')
      mapToSubCatsj.set('Local Patient Population Density', '')
      mapToSubCatsj.set('Alternative Care Options', '')
      mapToSubCatsj.set('Local Maternal Mortality Rate (MMR)', '')
      mapToSubCatsj.set('Local Infant Mortality Rate (IMR)', '')
      mapToSubCatsj.set('Additional Services', '')
      mapToSubCatsj.set('Diversity of Revenue Sources', 'Funding Sources')
      mapToSubCatsj.set('Donations Percent of Revenue', 'Funding Sources')
      mapToSubCatsj.set('Operating Margin', 'Financial Efficiency')
      mapToSubCatsj.set('Program Expense Percentage', 'Financial Efficiency')
      mapToSubCatsj.set('Administrative Expense Percentage', 'Financial Efficiency')
      mapToSubCatsj.set('Capital Expenditure Percentage', 'Financial Efficiency')
      mapToSubCatsj.set('Fundraising Expense Percentage', 'Financial Efficiency')
      mapToSubCatsj.set('Fundraising Efficiency', 'Financial Efficiency')
      mapToSubCatsj.set('Program Expense Growth', 'Financial Capacity')
      mapToSubCatsj.set('Liabilities to Assets Ratio', 'Financial Capacity')
      mapToSubCatsj.set('Charity Care Percentage', 'Financial Capacity')
      mapToSubCatsj.set('Budget', 'Accountability')
      mapToSubCatsj.set('Auditing', 'Accountability')
      mapToSubCatsj.set('Accounting Books', 'Accountability')
      mapToSubCatsj.set('Bank Accounts', 'Accountability')
      mapToSubCatsj.set('Safety of Funds', 'Accountability')
      mapToSubCatsj.set('Cost Per Life Saved', 'Operational Efficiency')
      mapToSubCatsj.set('Charity Care Efficiency', 'Operational Efficiency')
      mapToSubCatsj.set('Formal Governance Structure', 'Governance')
      mapToSubCatsj.set('Commitment to Mission', 'Governance')
      mapToSubCatsj.set('Strategic Plan and Implementation', 'Governance')
      mapToSubCatsj.set('Key Performance Indicators', 'Governance')
      mapToSubCatsj.set('Alternate Implementation Plans', 'Governance')
      mapToSubCatsj.set('Systems Capacity', 'Governance')
      mapToSubCatsj.set('Board Independence', 'Governance')
      mapToSubCatsj.set('Permanent Board Members', 'Governance')
      mapToSubCatsj.set('Board Meetings', 'Governance')
      mapToSubCatsj.set('Annual General Meetings', 'Governance')
      mapToSubCatsj.set('Board Review', 'Governance')
      mapToSubCatsj.set('Board Donation Oversight', 'Governance')
      mapToSubCatsj.set('Appointed CEO', 'Governance')
      mapToSubCatsj.set('Legal Support', 'Governance')
      mapToSubCatsj.set('Operational Policies', 'Governance')
      mapToSubCatsj.set('Culture of Continuous Improvement', 'Governance')
      mapToSubCatsj.set('Outcomes Reporting', 'Transparency ')
      mapToSubCatsj.set('Donor Privacy Policy', 'Transparency ')
      mapToSubCatsj.set('Website', 'Transparency ')
      mapToSubCatsj.set('Appropriate Standards of Care', 'Organization Quality')
      mapToSubCatsj.set('Equal Services for All Patients', 'Organization Quality')
      mapToSubCatsj.set('Community Engagement', 'Organization Quality')
      mapToSubCatsj.set('Quality Certifications', 'Organization Quality')
      mapToSubCatsj.set('Awards Conferred', 'Organization Quality')
      mapToSubCatsj.set('Major Surgeries', 'Volume')
      mapToSubCatsj.set('Child Deliveries', 'Volume')
      mapToSubCatsj.set('Outpatient Visits', 'Volume')
      mapToSubCatsj.set('Bed Occupancy', 'Volume')
      mapToSubCatsj.set('Weighted Average Patient Volume CAGR', 'Volume')
      mapToSubCatsj.set('Hospital Maternal Mortality Rate (MMR)', 'Care Quality')
      mapToSubCatsj.set('Hospital Infant Mortality Rate (IMR)', 'Care Quality')
      mapToSubCatsj.set('Patient Mortality Risk', 'Care Quality')
      mapToSubCatsj.set('Patient Readmission Rate', 'Care Quality')
      mapToSubCatsj.set('Days to Visit', 'Care Quality')
      mapToSubCatsj.set('Patient Satisfaction - Service', 'Care Quality')
      mapToSubCatsj.set('Patient Satisfaction - Staff', 'Care Quality')
      mapToSubCatsj.set('Patient Satisfaction - Hospital Cleanliness', 'Care Quality')
      mapToSubCatsj.set('Staff Satisfaction', 'Care Quality')
      mapToSubCatsj.set('Staff Experience', 'Care Quality')
      mapToSubCatsj.set('Staff Meetings', 'Care Quality')
      mapToSubCatsj.set('Staff Turnover', 'Care Quality')
      mapToSubCatsj.set('Physician Performance', 'Care Quality')
      mapToSubCatsj.set('Leadership Credibility', '')
      mapToSubCatsj.set('Donor Satisfaction', '')
      mapToSubCatsj.set('Charity Rating Organizations', '')
      mapToSubCatsj.set('Collaboration', '')
      mapToSubCatsj.set('Exchange Programs', '')
      mapToSubCatsj.set('Respect of Community', '')
      mapToSubCatsj.set('Volunteer Responsibility', '')
      mapToSubCatsj.set('Expected Volunteer Experience', '')
      mapToSubCatsj.set('Spousal Job Opportunities', '')
      mapToSubCatsj.set('Child Education Opportunities', '')
      mapToSubCatsj.set('Housing Opportunities', '')
      mapToSubCatsj.set('Local Safety', '')
      mapToSubCatsj.set('Local Safety Perception', '')
      mapToSubCatsj.set('Volunteer Recommendation', '')
      mapToSubCatsj.set('Overall Volunteer Satisfaction', '')
      mapToSubCatsj.set('Skills Match', '')
      mapToSubCatsj.set('Learning Opportunities', '')
      mapToSubCatsj.set('Career Development', '')
      mapToSubCatsj.set('Job Training Appropriateness', '')
      mapToSubCatsj.set('Community Affiliation', '')
      mapToSubCatsj.set('Strategy and Influence', '')
      mapToSubCatsj.set('Philanthropic Impact', '')
      mapToSubCatsj.set('Flexibility', '')
      mapToSubCatsj.set('Supervision', '')
      mapToSubCatsj.set('Recognition', '')
      mapToSubCatsj.set('Achievement', '')

    }