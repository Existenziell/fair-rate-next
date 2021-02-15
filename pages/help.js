import Link from 'next/link'
import Main from '../components/Main'

const Help = () => (

  <>
    <Main title='Help' titleSuffix={true}>
      <div className="flex flex-col items-center justify-center my-16 px-6">
        <h1>Instructions for Form 1003</h1>

        <div className="my-8 px-6 md:px-16 lg:px-32">

          <h2>Uniform Residential Loan Application</h2>
          <p>
            The lender uses this form to record relevant financial information about an
            applicant who applies for a conventional one- to four-family mortgage. Roman
            numerals in these instructions correspond to the sections on the form.
          </p>
          <p>
            Lenders must use the PDF dated 6/09 for mortgage loans applications taken on
            or after July 1, 2010.
          </p>

          <h2>Printing Instructions</h2>
          <p>
            We provide Form 1003 in an electronic format that prints as a letter size
            document. However, lenders may print Form 1003 as a legal size document or
            with different fonts or margins that may affect pagination; we have no
            specific standards for the number or size of pages the form may have.
            Consequently, the number and size of pages will not affect compliance with
            Fannie Mae requirements pertaining to use of the Uniform Residential Loan
            Application, provided that the content of the form has not been materially
            altered. When printing this form, you must use the "shrink to fit" option in
            the Adobe Acrobat print dialogue box.
          </p>

          <h2>Instructions</h2>
          <p>
            The lender may accept applications taken during a face-to-face interview,
            over the telephone, through the mail, or via the Internet. The lender should
            complete all blanks and attach any separate exhibits, details, or statements
            that are relevant to underwriting the mortgage. The borrower(s) must sign
            the original application at the time it is completed. If the application is
            taken over the telephone or via the Internet, the borrower(s) must sign the
            completed application as soon as possible thereafter. However, an electronic
            signature or facsimile of the borrower's signature is acceptable as
            indicated in the "Acknowledgment and Agreement" section of the application.
            The lender should retain the original application with the supporting
            information provided by the borrower(s). Before or at the loan closing, the
            borrower(s) must sign the final application that the lender prepares based
            on its verification of the information that the borrower(s) provided in the
            original application.
          </p>
          <p>
            The instructions at the top of Form 1003 are consistent with the permissible
            inquiries that creditors are allowed to make under the Equal Credit
            Opportunity Act (ECOA). Although ECOA permits the lender in a community
            property state to obtain information regarding the liabilities of a
            borrower's spouse even though he or she is not applying for the mortgage and
            his or her income will not be considered for loan qualification purposes, we
            do not require the lender to obtain the information. This also means that in
            states where another person shares community property rights with the
            applicant, the lender does not need to include information on that person's
            liabilities if he or she is not an applicant.
          </p>

          <h2>Introductory Statement</h2>
          <p className="text-xs italic mb-6 -mt-3">
            Note: The following instructions highlight certain sections of the form.
          </p>
          <p>
            We recognize that the introductory paragraph of Form 1003 differs slightly
            from the introductory paragraph in the Uniform Residential Loan Application
            found on Freddie Mac's website, Freddie Mac Form 65. However, because we
            have determined that these differences are not material, Fannie Mae will
            deem either version to comply with our requirements for use of the Uniform
            Residential Loan Application.
          </p>

          <h2>V. Monthly Income and Combined Housing Expense Information</h2>
          <p>
            Gross Monthly Income: If the net cash flow for an investment property is a
            positive number , it should be listed as "net rental income." If it is a
            negative number, it must be included in the applicant's monthly obligations.
            If the property is a two- to fourunit property for which the applicant
            occupies one of the units as a principal residence, the monthly rental
            income should be listed as "net rental income."
          </p>
          <p>
            Combined Monthly Housing Expense: The present monthly housing expenses for
            the borrower and the co- borrower should be listed on a combined basis. The
            proposed monthly housing expense for a two- to four-unit property in which
            the applicant will occupy a unit as a principal residence should reflect the
            monthly payment (PITIA) for the subject property. For all one- to four-unit
            investment properties the present monthly housing expense should reflect the
            applicant's principal residence.
          </p>

          <h2>VI. Assets and Liabilities</h2>
          <p>
            When the borrower's and co-borrower's assets and liabilities are not
            sufficiently joined to make a combined statement meaningful, a separate
            Statement of Assets and Liabilities (Form 1003A) should be completed for the
            co-borrower.
          </p>

          <h2>VII. Details of Transaction</h2>
          <p>
            The purchase price shown on Line "a" under the "Details of Transaction"
            should not include any discounts or rebates or other allowances paid or
            allowed to the purchaser. For refinancing, the amount being refinanced
            should be shown on Line "d" -- Refinance. The figure should include the
            total amount of all existing liens plus the costs of improvements that have
            been -- or will be -- made. Lines "a", "b", and "c" should not be used to
            describe a refinance transaction.
          </p>

          <h2>VIII. Declarations</h2>
          <p>
            Noncitizen Applicants: If an applicant indicates in his response to Question
            J that he is not a U.S. citizen, and also indicates in his response to
            Question K that he is not a permanent resident alien, the lender may wish to
            ask whether he is a nonpermanent resident alien or otherwise is lawfully
            present in the United States.
          </p>

          <h2>X. Information for Government Monitoring Purposes</h2>
          <p>
            This section is included to aid the federal government in monitoring
            compliance with equal credit opportunity, fair housing and home mortgage
            disclosure laws. Supplying this information is strictly voluntary on the
            part of the applicant, but lenders should ask all applicants to provide it,
            including those who apply by telephone and through the Internet, and should
            describe the reason for collecting this data. Race and ethnicity are
            separate categories, and although the lender should ask applicants to
            furnish information for both, applicants may furnish one but not the other.
            Note that there is no longer a place for applicants to indicate race as
            "Other" but applicants may check as many races as apply.
          </p>
          <p>
            The Home Mortgage Disclosure Act and its implementing Regulation C generally
            require Lenders to collect sex, race, and ethnicity data on all
            applications.
          </p>
          <p>
            When an application is taken in person and an applicant elects not to
            provide some or all of this information, federal law requires the lender to
            note the applicant's sex, ethnicity, and race on the form, based on the
            lender's visual observation or the applicant's surname. To aid in
            identifying applicants who may be of Hispanic ethnicity and who elect not to
            self-identify, the lender may wish to consult the list of Spanish surnames
            developed by the U.S. Bureau of the Census. Furthermore, the lender may wish
            to advise the applicant that he may complete or change the information in
            this section after the application is approved, at any time up until
            closing.
          </p>

          <h2>To Be Completed By Interviewer</h2>
          <p>
            The interviewer must complete this portion of the form to indicate the
            method used to take the application and to provide the name and telephone
            number of the interviewer, as well as his or her employer's name and
            address.
          </p>
          <h2>
            To Be Completed By Loan Originator (for PDF dated 06/09 for mortgage loans
            applications taken on or after January 1, 2010)
          </h2>
          <p>
            The loan originator must complete this portion of the form to indicate the
            method used to take the application and to provide the loan originator's
            name, ID, and telephone number, as well as his or her employer's name,
            company ID, and address.
          </p>

          <h2>Continuation Sheet/Residential Loan Application</h2>
          <p>
            Lenders may amend this section by including space to evidence intent to
            apply for joint credit. Other approaches, such as including this information
            on a separate document, are also acceptable to Fannie Mae, provided they
            meet the requirements of applicable law. Lenders should consult counsel to
            determine their alternatives.
          </p>

          <h2>Special Notice for Balloon Mortgages</h2>
          <p>
            For each balloon mortgage, the lender must insert a special notice regarding
            the nature of the balloon features on Form 1003 or in a separate attachment
            to the form. If an attachment is used, the borrower(s) must sign the
            attachment. The following language must be inserted, using capital letters:
          </p>
          <p className="mt-8">
            "THIS LOAN MUST EITHER BE PAID IN FULL AT MATURITY OR REFINANCED TO A MARKET
            LEVEL FIXED-RATE MORTGAGE. YOU MUST REPAY THE ENTIRE PRINCIPAL BALANCE OF
            THE LOAN AND UNPAID INTEREST THEN DUE IF YOU DO NOT QUALIFY FOR THE
            CONDITIONAL RIGHT TO REFINANCE AS SPECIFIED IN THE NOTE ADDENDUM AND
            MORTGAGE RIDER. THE LENDER IS UNDER NO OBLIGATION TO REFINANCE THE LOAN IF
            QUALIFICATION CONDITIONS ARE NOT MET. YOU WILL, THEREFORE, BE REQUIRED TO
            MAKE PAYMENT OUT OF OTHER ASSETS THAT YOU MAY OWN, OR YOU WILL HAVE TO FIND
            A LENDER, WHICH MAY BE THE LENDER YOU HAVE THIS LOAN WITH, WILLING TO LEND
            YOU THE MONEY. IF YOU REFINANCE THIS LOAN AT MATURITY, YOU MAY HAVE TO PAY
            SOME OR ALL OF THE CLOSING COSTS NORMALLY ASSOCIATED WITH A NEW LOAN EVEN IF
            YOU OBTAIN REFINANCING.”
          </p>

          <h2>For California Applications</h2>
          <p>
            California Civil Code 1812.30 (j) requires that credit applications clearly
            specify that the applicant, if married, may apply for a separate account.
            This requirement is not inconsistent with the language at the beginning of
            Form 1003.
          </p>
          <p>
            Lenders may revise the description of the "Married" box in Section III for
            Borrowers and Co-Borrowers by adding "(includes registered domestic
            partners)." If lenders are unable to insert the language due to the format
            of the form, this language may be added to the continuation sheet or
            included as an attachment to Form 1003.
          </p>
        </div>

        <Link href="/">
          <a>
            <button>Back</button>
          </a>
        </Link>

      </div>
    </Main>

    <style jsx>{`
      h2 {
        margin-top: 48px;
        margin-bottom: 12px;
        font-size: 1.5rem;
      }
    `}</style>
  </>
)

export default Help
