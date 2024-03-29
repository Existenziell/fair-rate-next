import Link from 'next/link'
import Main from '../../components/Main'

const Apply = () => (
  <Main title='Apply' titleSuffix={true}>
    <div className='flex flex-col items-center justify-center my-16 px-8 md:px-16 relative'>
      <h1 className="mb-16 text-center">Uniform Residential Loan Application</h1>
      <div className="text-justify px-8 w-full lg:w-2/3">
        <p className="mb-8">This application is designed to be completed by the applicant(s) with the Lender’s assistance.</p>
        <p className="mb-8">Applicants should complete this form as “Borrower” or “Co-Borrower,” as applicable. Co-Borrower information must also be provided (and the appropriate box checked) when the income or assets of a person other than the Borrower (including the Borrower’s spouse) will be used as a basis for loan qualification or  the income or assets of the Borrower’s spouse or other person who has community property rights pursuant to state law will not be used as a basis for loan qualification, but his or her liabilities must be considered because the spouse or other person has community property rights pursuant to applicable law and Borrower resides in a community property state, the security property is located in a community property state, or the Borrower is relying on other property located in a community property state as a basis for repayment of the loan.</p>
        <p className="mb-8">If this is an application for joint credit, Borrower and Co-Borrower each agree that we intend to apply for joint credit.</p>
      </div>
      <Link href="/apply/1"><a className="button primary">Start</a></Link>
    </div>
  </Main>
)

export default Apply
