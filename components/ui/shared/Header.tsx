import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../button"
import NavItems from "./NavItems"
import MobilNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
    <Link href="/" className="w-36">
        <Image src="/assets/images/logo.svg" width={128} height={38} alt="img not found"/>
    </Link>

    <SignedIn>
        <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems/>
        </nav>
    </SignedIn>

    <div className="flex w-32 justify-end gap-3">
        <SignedIn>
            <UserButton afterSignOutUrl="/"/>
            <MobilNav/>
        </SignedIn>
    <SignedOut>
        <Button asChild className="rounded-full" size='lg'>
    <Link href="/sign-in">
        Login
    </Link>
        </Button>
    </SignedOut>
    </div>
        </div>
    </header>
  )
}

export default Header