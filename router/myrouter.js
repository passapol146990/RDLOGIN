const express = require('express');
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('index.ejs')
})
router.post('/login',(req,res)=>{
    const morning = {
        'P11':'https://docs.google.com/spreadsheets/d/10IYKzeYIQJUXlRUZYSUlbz-MelBkYilCSlQMaw9QsVY/edit?usp=sharing',
        'P12':'https://docs.google.com/spreadsheets/d/1vG8ONBYW5WewDv_qXOLp75GxRj4VEJf4tZvCKgTmH8I/edit?usp=sharing',
        'P13':'https://docs.google.com/spreadsheets/d/1IL1yszNk8qvaOa324esprLRIeRNhl-y1iN0boaQVK08/edit?usp=sharing',
        'P14':'https://docs.google.com/spreadsheets/d/1Shbv5iOxQU2-S11Dzflj_vTlGO6kgKAHZiqps61H0MM/edit?usp=sharing',
        'P15':'https://docs.google.com/spreadsheets/d/1zU9SLDzC3DtgcGJ2XA0r-oOX7hFmLBccoeHHKVp4d6E/edit?usp=sharing',
        'P16':'https://docs.google.com/spreadsheets/d/12_Vze6yPHxdCM5l3t5lYSpYF1zCSwxLH24Ip5u4OI4I/edit?usp=sharing',
        'P21':'https://docs.google.com/spreadsheets/d/1ngVRdnULpWrBYV69srYEy74P-xRcp9-NatBLzPHy8oI/edit?usp=sharing',
        'P22':'https://docs.google.com/spreadsheets/d/1ZRHFU8nrTtZXVfFquf80eWvLooZyetRxx5kvmK6hTM0/edit?usp=sharing',
        'P23':'https://docs.google.com/spreadsheets/d/1Is-Z6nGGp2NzG4J_ek8VfkQHeQMM0Bkis0nMhygQPZU/edit?usp=sharing',
        'P24':'https://docs.google.com/spreadsheets/d/1cSDY7cNT5Kvys9mmzGsC8q-VMkygx6UZQmBXl5jXLXw/edit?usp=sharing',
        'P25':'https://docs.google.com/spreadsheets/d/1FE5qCRmCGXscw3Ju67J8mhojbAtWFFNFX3EuM4FZo-U/edit?usp=sharing',
        'P26':'https://docs.google.com/spreadsheets/d/14q4nULW1ygjbRUNtmozrvaMYaWvpbYAIvFPSdF8myyo/edit?usp=sharing',
        'P31':'https://docs.google.com/spreadsheets/d/1EF5Bk7eK0taJ1gfL5pPRRKKIpAUpVJ3YLjApb1IIYx4/edit?usp=sharing',
        'P32':"https://docs.google.com/spreadsheets/d/1DsoQTBlsA4fMnl5dMGFh1Zdj9loFsHh5Kbsa8aqILhY/edit?usp=sharing",
        'P33':"https://docs.google.com/spreadsheets/d/18KcOwtbw-suI0Z_ISxx5heac8Q306rgc9KlxKZCJ4s4/edit?usp=sharing",
        'P34':"https://docs.google.com/spreadsheets/d/1cjGhFkx3oVVP9xeY1_TzOo2f1FoAsVNCSDrMjnPQZos/edit?usp=sharing",
        'P35':"https://docs.google.com/spreadsheets/d/1mZHqmll4Secj1QFgMvT74ozow51v1NiluWzNmu_c6gM/edit?usp=sharing",
        'P36':"https://docs.google.com/spreadsheets/d/1QswcRsX10WLmYPNfpBS9U30me55SrB7jYXHAu82l95s/edit?usp=sharing"
    }
    const afternoon = {
        'P11':'https://docs.google.com/spreadsheets/d/1KIOMaB8nqieYiRCYPpZ_nQrvmMu9SIafe9OjPZ7neB4/edit?usp=sharing',
        'P12':'https://docs.google.com/spreadsheets/d/d/1KLG94ygSuI-9bDFc8dy6nMnIxw1ivdxPvN_4jZVGusM/edit?usp=sharing',
        'P13':'https://docs.google.com/spreadsheets/d/1fQ1APJddaI6fYCmgmy_VQK_QMuzJ3ZQU__7A4taPyEA/edit?usp=sharing',
        'P14':'https://docs.google.com/spreadsheets/d/1LsXwru_SuEi1vN0z5ZzeEzn9l7X86c3btuubLPHXbPY/edit?usp=sharing',
        'P15':'https://docs.google.com/spreadsheets/d/1E3ku6yWjlfuX3cCW86sHC6RAioX7oAf-lmM4Xr8YA4U/edit?usp=sharing',
        'P16':'https://docs.google.com/spreadsheets/d/1xF0A8UOKAyx3Hjhhyn-dTkXpxfEFN3bWGw-mMVZpqDE/edit?usp=sharing',
        'P21':'https://docs.google.com/spreadsheets/d/1z1qFXYD4xEJG5d8TR_IAyYL35Oec44GWBwdx45KtSKs/edit?usp=sharing',
        'P22':'https://docs.google.com/spreadsheets/d/1ED6c7O2H0bfDmCWfqpEcX7t3AXQa4R8duvcMBwVva9c/edit?usp=sharing',
        'P23':'https://docs.google.com/spreadsheets/d/1YASMOuRze7NK3RticWdVWt2nK46G8GdE2WppcY-n37U/edit?usp=sharing',
        'P24':'https://docs.google.com/spreadsheets/d/1-E80Skcpisk1CL45d0IaWfvf-_zsasl-xWlTnQup0AM/edit?usp=sharing',
        'P25':'https://docs.google.com/spreadsheets/d/1bpgxvcJIAIkaFbSynLhL35HIoFuHtLTUhzDuFTniteM/edit?usp=sharing',
        'P26':'https://docs.google.com/spreadsheets/d/1OcD8VsPccYGsDtKlo8DNBsn7vSajv0dtUmwOboat-BU/edit?usp=sharing',
        'P31':'https://docs.google.com/spreadsheets/d/1PN9ZBMz0CVLRADyvVLPgKeQB1pDe2aELxK2GT9YORDI/edit?usp=sharing',
        'P32':"https://docs.google.com/spreadsheets/d/1YfZtQtd3-_yUNPKrxVr8HvJb3rAImITD_X4NjMGmrRE/edit?usp=sharing",
        'P33':"https://docs.google.com/spreadsheets/d/11LAZY7RCgxc60gE1tNHVvtfRbVbtIkpoAaDtsuUzawE/edit?usp=sharing",
        'P34':"https://docs.google.com/spreadsheets/d/1flBH_Txb5bSymYXbrgxH23gfM8vwVYQ2IisYvm8aaV4/edit?usp=sharing",
        'P35':"https://docs.google.com/spreadsheets/d/1YvesvtXvZRxFI0MSb0HCSksM31jX3QE6S90bYkTbYHs/edit?usp=sharing",
        'P36':"https://docs.google.com/spreadsheets/d/1bMkC8oCi8oTdSoQG1loPL3p22nEZB6SPDqG1v15MKJE/edit?usp=sharing"
    }
    console.log(req.body.timing)
    let timezone = ''
    if(req.body.timing === "เช้า"){
        timezone =  morning
    }else{timezone =  afternoon}

    if(req.body.Username === 'rd2566' && req.body.Password === 'kls123456'){
        let data = []
        for(let i =1;i<=6;i++){
            data.push(timezone['P'+req.body.floor+i])
        }
        res.render('form.ejs',{floor:req.body.floor,time:req.body.timing,data:data})
    }else{res.render('index.ejs')}
})


module.exports = router