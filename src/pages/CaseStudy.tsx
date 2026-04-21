import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { setPageMeta } from "@/utils/seo";
import {
  CaseStudyHero,
  CaseStudyChallenge,
  CaseStudySolution,
  CaseStudyResults,
  CaseStudyFeatures,
  CaseStudyCTA,
} from "@/components/CaseStudyTemplate";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : null;

  useEffect(() => {
    if (caseStudy) {
      setPageMeta({
        title: `${caseStudy.title} - Case Study | Sitexar`,
        description: caseStudy.fullDescription,
        keywords: `${caseStudy.title}, case study, ${caseStudy.category}`,
      });
    }
  }, [slug, caseStudy]);

  if (!caseStudy) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="min-h-screen">
      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyChallenge challenge={caseStudy.challenge} />
      <CaseStudySolution solution={caseStudy.solution} />
      <CaseStudyResults results={caseStudy.results} />
      <CaseStudyFeatures features={caseStudy.features} />
      <CaseStudyCTA caseStudy={caseStudy} />
    </div>
  );
};

export default CaseStudy;
